const sql = require('./../mysql-pro.js')
const fn_index = async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="baodongqin"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
};

const fn_signin = async (ctx, next) => {
  const name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  const tmp = await sql.query("select * from user where user_name = ? and pass_word = ? limit 1;", [name, password]).then((result) => {
    let back = false
    if (result.length) {
      back = (name == result[0].user_name && password == result[0].pass_word) ? true : false;
    } else {
      back = false
    }
    return back
  }, (error) => {
    return -1;
  });
  if (tmp) {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
          <p><a href="/">Try again</a></p>`;
  }
};

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
};