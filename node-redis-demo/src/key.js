/**
 * Redis 键(key) 命令
 */
import client from '../db/redis'

const keys = () => {
  // 查找以 w3c 为开头的 key
  client.keys('w3c*', (err, replies) => {
    if (err) throw new Error(err)
    console.log(replies.length + ' replies:')
    replies.map((reply, i) => {
      console.log(`  ${i}: ${reply}`)
    })
    // client.quit()
  })
  // dump 序列化给定的 key, 并返回被序列化的值
  client.dump('username', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`dump username >>>`, reply)
  })

  // exists检查给定的 key 是否存在
  client.exists('username', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`username exists: ${reply}`)
  })

  // expire 设置过期时间(单位秒)
  client.expire('username', 20, (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`setting username expire >>>`, reply)
  })

  // ttl 返回 key 的剩余过期时间
  client.ttl('username', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`ttl username: `, reply)
  })

  // randomkey 随机返回一个key
  client.randomkey((err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`randomkey >>>`, reply)
  })

  // rename
  client.set('message', 'Hello Ly', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`set message: `, reply)
  })
  client.rename('message', 'resetmessage', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`rename message >>>`, reply)
  })

  client.exists('message', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`exists message`, reply)
  })

  client.exists('resetmessage', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`exists resetmessage`, reply)
  })

  // type 返回 key 的数据类型
  client.type('age', (err, reply) => {
    if (err) {
      throw new Error(err)
    }
    console.log(`type age >>>`, reply)
  })


  setTimeout(() => {
    client.exists('username', (err, reply) => {
      if (err) {
        throw new Error(err)
      }
      console.log(`after 30s username exists: ${reply}`)
    })
  }, 30 * 1000)
}

export default keys
