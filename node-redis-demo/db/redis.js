/**
 * redis 数据库连接
 */
import redis from 'redis'
const client = redis.createClient()

client.on('ready', () => {
  console.log('Redis is ready')
})
client.on('error', err => console.error('Error >>>', err))

export default client
