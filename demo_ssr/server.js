const Koa = require('Koa');
const { renderer } = require('vue-server-renderer')
const createApp = require('/path/to/built-server-bundle.js')

const server = new Koa()

server.use(async ctx => {
  const app = await createApp(ctx)
  const html = await renderer.renderToString(app)
  ctx.body = html
})
