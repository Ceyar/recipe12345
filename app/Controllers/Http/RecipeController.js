'use strict'

const Recipe = use('App/Models/Recipe');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with recipes
 */
class RecipeController {
  /**
   * Show a list of all recipes.
   * GET recipes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let recipes = await Recipe.query().with('user').fetch()
    return response.json(recipes)
  }

  /**
   * Render a form to be used for creating a new recipe.
   * GET recipes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new recipe.
   * POST recipes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const title = request.input('title')
    const hat = request.input('hat')
    const body = request.input('body')

    const recipe = new Recipe()
    recipe.title = title
    recipe.hat = hat
    recipe.body = body

    await recipe.save()
    return response.json(recipe)

  }

  /**
   * Display a single recipe.
   * GET recipes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let recipes = await Recipe.find(params.id)
    return response.json(recipes)
  }

  /**
   * Render a form to update an existing recipe.
   * GET recipes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update recipe details.
   * PUT or PATCH recipes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const title = request.input('title')
    const hat = request.input('hat')
    const body = request.input('body')

    let recipe = await Recipe.find(params.id)
    recipe.title = title
    recipe.hat = hat
    recipe.body = body

    await recipe.save()
    return response.json(recipe)
  }

  /**
   * Delete a recipe with id.
   * DELETE recipes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let recipe = await Recipe.find(params.id)
    recipe.delete()
    return response.json({'message': 'Recipe deleted!'})
  }
}

module.exports = RecipeController
