module.exports = {
    index: async(ctx, next) => {
      await ctx.render("home/index",{title:"Welcome"})
    },
    home: async(ctx, next) => {
      ctx.response.body = '<h1>HOME</h1>'
    },
    homeParams: async(ctx, next) => {
      ctx.response.body = '<h1>HOME page /:id/:name</h1>'
    },
    login: async(ctx, next) => {
    	await ctx.render('home/login',{
    	    btnName :'GO'
    	})
    },
    register: async(ctx, next) => {
      const { app } = ctx
      let {
        name,
        password
      } = ctx.request.body;
    	let result = await app.service.index.register(name,password);
      if(result.status == "-1"){
        await ctx.render("home/login", result.data)
      }else{
        ctx.state.title = "个人中心"
        await ctx.render("home/success", result.data)
      }
    }
  }
