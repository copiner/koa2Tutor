const router = require('koa-router')()
module.exports = (app) => {
  console.log(app.controller.index.index)
  router.get( '/', app.controller.index.index )
  router.get('/home', app.controller.index.home)
  router.get('/about/:id/:name', app.controller.index.about)
  router.get('/user', app.controller.index.login)
  router.post('/user/register', app.controller.index.register)
  app.use(router.routes())
     .use(router.allowedMethods())
}
