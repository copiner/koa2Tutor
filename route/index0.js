const router = require('koa-router')()
const controller = require('../controller');

module.exports = (app) => {
    router.get('/', controller.index)

    router.get('/home',controller.home)

    router.get('/about/:id/:name',controller.about)

    router.get('/user',controller.login)

    router.post('/user/register',controller.register)

    app.use(router.routes()).use(router.allowedMethods())
}
