const Client = require("mysql-pro");
const client = new Client({
    mysql: {
          user: 'dev',
          password: 'DEv@0601',
          database: 'b2b_bdq',
          host: '192.168.5.85',
    }
});

module.exports = client;