const fs = require('fs')
const Koa = require('Koa');
const Vue = require('vue');
const { createRenderer } = require('vue-server-renderer')

const app = new Koa();
const vm = new Vue({
  template: `<p>hello woody</p>`
});

const renderer = createRenderer();

app.use(async ctx => {
  const html = await renderer.renderToString(vm);
  ctx.body = html;
})

app.listen(3000);
