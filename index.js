const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: "lifesmprealest.sdlf.fun",
  port: 25565,
  username: "AFK_Bot",
  version: "1.21.8"
})

const PASSWORD = ")(*&^%$#"

bot.once('spawn', () => {
  setTimeout(() => {
    bot.chat(`/register ${PASSWORD} ${PASSWORD}`)
  }, 2000)

  setTimeout(() => {
    bot.chat(`/login ${PASSWORD}`)
  }, 4000)

  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)
  }, 30000)
})

bot.on('end', () => {
  console.log("Disconnected. Restarting...")
  setTimeout(() => process.exit(1), 5000)
})

bot.on('error', console.log)
