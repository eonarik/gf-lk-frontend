// const fs = require('fs');

module.exports = {
  devServer: {
    proxy: 'https://gromovaflowers.ru',
    // https: {
    //   key: fs.readFileSync('./certs/domain.key'),
    //   cert: fs.readFileSync('./certs/domain.crt'),
    // },
    https: true,
    public: 'https://localhost:8080/',
  },
};
