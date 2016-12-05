/**
 * Redis 哈希(Hash) 命令
 */
import client from '../db/redis'

const hashs = () => {
  // hset
  client.hset('myhash', 'field1', 'foo', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log('hset >>>', reply)
  })

  // hexists
  client.hexists('myhash', 'field1', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hexists >>>`, reply)
  })
  client.hexists('myhash2', 'field2', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hexists >>>`, reply)
  })

  // hget
  client.hget('myhash', 'field3', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`mget >>>`, reply)
  })

  // hgetall
  client.hgetall('myhash', (err, replies) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hgetall >>>`, replies)
  })

  // hincrby
  client.hincrby('myhash2', 'field1', 20, (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hincrby >>>`, reply)
  })

  // hkeys 湖区哈希表张的所有字段名
  client.hkeys('myhash', (err, replies) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hkeys >>>`, replies)
  })

  // hlen 湖区哈希表中字段的数量
  client.hlen('myhash', (err, replies) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hlen >>>`, replies)
  })

  // hmget获取多个字段
  client.hmget('myhash', 'field1', 'field', (err, replies) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hmget >>>`, replies)
  })

  // hvals 返回哈希表所有字段的值
  client.hvals('myhash', (err, replies) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`hvals >>>`, replies)
  })
}

export default hashs
