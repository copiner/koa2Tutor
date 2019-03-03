const service = require('../service');
module.exports = {
    index: async(ctx, next) => {
      ctx.response.body = `<h1>INDEX</h1>`
    },
    home: async(ctx, next) => {
      console.log(ctx.request.query)
      console.log(ctx.request.querystring)
      ctx.response.body = '<h1>HOME</h1>'
    },
    homeParams: async(ctx, next) => {
      console.log(ctx.params)
      ctx.response.body = '<h1>HOME page /:id/:name</h1>'
    },
    login: async(ctx, next) => {
	await ctx.render('login',{
	    btnName :'GO'
	})
    },
    register: async(ctx, next) => {
      let {
        name,
        password
      } = ctx.request.body;
	console.log(ctx.request.body);
	console.log(name + password);
	let data = await service.register(name,password);
	ctx.response.body = data;
    }
  }
