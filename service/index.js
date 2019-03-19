module.exports = {
    register: async(name, pwd) => {
      let data
      if (name == 'wdaonngg' && pwd == '123456') {
        data = {
          status:0,
          data:{
            title:"个人中心",
            content:"欢迎来到个人中心"
          }
        }
      } else {
        data = {
          status:-1,
          data:{
            title:"登陆失败",
            content:"请输入正确的账号信息"
          }
        }
      }
      return data
    }
  }
