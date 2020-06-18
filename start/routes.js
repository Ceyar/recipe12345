'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.put('/api/recipes/:id', 'RecipeController.update').middleware('auth')
Route.delete('/api/recipes/:id', 'RecipeController.destroy').middleware('auth')
Route.post('/api/recipes','RecipeController.store').middleware('auth')
Route.get('/api/recipes', 'RecipeController.index')
Route.get('/api/recipes/:id', 'RecipeController.show')
Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')
