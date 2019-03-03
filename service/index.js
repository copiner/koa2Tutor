module.exports = {
    register: async(name, pwd) => {
      let data 
      if (name == 'wdaonngg' && pwd == '123456') {
        data = `Hello, ${name}!`
      } else {
          data = 'error';
      }
      return data
    }
  }
