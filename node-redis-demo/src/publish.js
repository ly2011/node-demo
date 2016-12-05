/**
 * Redis 发布订阅(publish) 命令
 */
import client from '../db/redis'

let i = 0
const publishes = () => {
  setInterval(() => {
    // publish
    client.publish('redisChat', 'hello, i m here' + i, (err, reply) => {
      if (err) {
        throw new Error(err)
      }
      console.log(`publish >>>`, reply)
    })
    i++
  }, 1000)
}

publishes()

export default publishes
