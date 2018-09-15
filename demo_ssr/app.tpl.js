const Koa = require('Koa');
const Vue = require('vue');

const app = new Koa();
const vm = new Vue({
  template: `<h1>hello</h1>`
});

const renderer = require('vue-server-renderer').createRenderer();

app.use(async ctx => {
  const html = await renderer.renderToString(vm);
  ctx.body = html;
})

app.listen(3000);
