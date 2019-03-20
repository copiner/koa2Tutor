const path = require('path');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const ip = require('ip');

const miSend = require('./mi-send');
const miLog = require('./mi-log')

module.export = (app)=>{
    app.use(miLog({
      env: app.env,  // koa 提供的环境变量
      projectName: 'koa2-tutor',
      appLogLevel: 'debug',
      dir: 'logs',
      serverIp: ip.address()
    }))

    app.use(staticFiles(path.resolve(__dirname,"./public")));

    app.use(nunjucks({
        ext:'html',
        path:path.join(__dirname,'views'),
        nunjucksConfig:{
    	     trimBlocks:true
        }
    }));

    app.use(bodyParser());

    app.use(miSend())
}
