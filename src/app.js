const Koa = require('koa')
let app = new Koa()
const { Port } = require('../config')
app.listen(Port, () => {
    console.log(`http://localhost:${Port}`);

})