'use strict'

const Route = use('Route')

module.exports = () => {
  Route.get('/', 'UserController.user').middleware('auth')
  Route.put('/:id', 'UserController.update').validator('auth/Register').middleware('auth')
  Route.delete('/:id', 'UserController.delete').middleware('auth')
}