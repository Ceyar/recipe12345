'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecipeSchema extends Schema {
  up () {
    this.create('recipes', (table) => {
      table.increments()
      table.string('title')
      table.text('hat')
      table.text('body')
      table.integer('user_id').unsigned.references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('recipes')
  }
}

module.exports = RecipeSchema
