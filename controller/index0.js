const service = require('../service');
module.exports = {
    index: async(ctx, next) => {
      await ctx.render("home/index",{title:"Welcome"})
    },
    home: async(ctx, next) => {
      ctx.response.body = '<h1>HOME</h1>'
    },
    about: async(ctx, next) => {
      ctx.response.body = '<h1>ABOUT</h1>'
    },
    login: async(ctx, next) => {
    	await ctx.render('home/login',{
    	    btnName :'GO'
    	})
    },
    register: async(ctx, next) => {
      let {
        name,
        password
      } = ctx.request.body;
    	let result = await service.register(name,password);
      if(result.status == "-1"){
        await ctx.render("home/login", result.data)
      }else{
        ctx.state.title = "个人中心"
        await ctx.render("home/success", result.data)
      }
    }
  }
