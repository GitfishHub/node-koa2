const fn_hello = async (ctx, next) => {
  const name = ctx.params.name;
  const data = {
    a: 1
  }
  ctx.response.body = data;
};

module.exports = {
  'GET /hello': fn_hello
};