'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Recipe extends Model {
  user(){
    return this.belongsTo('App/Models/User');
  }
  recipes(){
    return this.hasMany('App/Models/Recipe')
  }
}

module.exports = Recipe
