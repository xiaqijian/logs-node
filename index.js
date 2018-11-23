const Koa = require('koa')
const readline = require('readline');
const utl = require('./utils')
const fs = require('fs');

const app = new Koa()

const rl = readline.createInterface({
    input: fs.createReadStream('./doc/shadowsocks.log')
});

let arrs = []

rl.on('line', (line) => {
    // const arr = line.split('INFO     connecting ');
    // console.log(arr)
    // console.log(utl.getNet(line))
    arrs.push(utl.getNet(line))
    // console.log('访问时间：%s %s，访问ip：%s， 访问地址：%s', arr[0], arr[1],arr[10], arr[8]);
});

app.use(async (ctx) => {
    console.log(arrs)
  ctx.body = '222'
})


app.listen(3000)

console.log('localhost"3000')

