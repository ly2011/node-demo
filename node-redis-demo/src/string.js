/**
 * Redis 字符串(String) 命令
 */
import client from '../db/redis'

const strings = () => {
  // 设置字符串
  client.set('username', 'ly', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(reply)
  })
  client.set('age', 20, (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(reply)
  })

  // 获取字符串(getrange)
  client.getrange('username', 0, 0, (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(reply)
  })

  // getset 用于设置指定 key 的值, 并返回 key 旧的值
  client.getset('ly-user', '云仔', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`getset : >>> ${reply}`)
  })

  // meget 返回所有(一个或多个)给定 key 的值。如果给定的 key 里面, 有某个 key 不存在, 那么这个 key 返回特殊值 nil。
  client.mget('username', 'age', 'mykey', (err, replies) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`mget >>>`, replies)
  })

  // setex 为指定的 key 设置值及其过期时间。
  client.setex('setkey1', 60, 'redis', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`setex >>>`, reply)
  })

  // setnx 在指定的 key 不存在时, 为 key 设置指定的值
  client.setnx('setkey2', 'rr', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`setnx >>>`, reply)
  })

  // setrange 用指定的字符串覆盖给定 key 所存储的 字符串值
  client.set('ll', 'Hello World', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`before setrange >>>`, reply)
  })
  client.setrange('ll', 6, 'Redis', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`setrange >>>`, reply)
  })

  // strlen 用于获取指定 key 所存储的字符串值得长度
  client.strlen('ll', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`strlen >>>`, reply)
  })

  // mset 同时设置一个或多个 key-value
  client.mset('ly1', '吃饭', 'ly2', '睡觉', 'ly3', '还是吃', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`mset >>>`, reply)
  })

  // msetnx
  client.msetnx('rmdbs', 'mysql', 'nosql', 'MongoDB', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`msetnx >>>`, reply)
  })
  client.mget('rmdbs', 'nosql', (err, replies) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`mget >> `, replies)
  })

  client.msetnx('rmdbs', 'sqlite', 'language', 'python', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`msetnx >>>`, reply)
  })

  // incr 递增
  client.incr('page_view', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`incr >>>`, reply)
  })

  client.incrby('page_count', 50, (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`incrby >>>`, reply)
  })
  client.incrby('page_count', 20, (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`incrby >>>`, reply)
  })

  // append 追加字符串
  client.append('myphone', 'nokia', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`append >>>`, reply)
  })
  client.append('myphone', ' - 1110', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`append >>>`, reply)
  })
}

export default strings
