/**
 * Redis 发布订阅(subscribe) 命令
 */
import client from '../db/redis'

const subscribes = () => {
  setInterval(() => {
    // subscribe
    client.subscribe('redisChat', (err, replies) => {
      if (err) {
        throw new Error(err)
      }
      console.log(`subscribe >>>`, replies)
    })
  }, 1000)
}

export default subscribes
