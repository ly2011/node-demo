/**
 * 综合
 */
import { normalize, schema } from 'normalizr'
import fs from 'fs'
import path from 'path'

const outputFilename = path.join('logs', 'compose.json')

// 过滤user schema 的 name字段
const userSchemaOptions = {
  processStrategy: (input) => {
    // 检测到input是否有name属性, 如果存在, 则删除
    if (input.hasOwnProperty('name')) {
      delete input['name']
    }
    console.log('input', input)
    return { ...input }
  }
}

// 定义 `schema`
const user = new schema.Entity('users', {}, userSchemaOptions)
const collection = new schema.Entity('collections', {
  curator: user
})
const article = new schema.Entity('articles', {
  author: user, // 注意这里的 key(author)
  collections: [collection] // 注意这里的 key(collections)
})
const feed = {
  feed: [article]
}
let input = null

input = {
  feed: [{
    id: 1,
    title: 'Some Article',
    author: {
      id: 3,
      name: 'Mike Persson'
    },
    collections: [{
      id: 1,
      title: 'Awesome Writing',
      curator: {
        id: 4,
        name: 'Andy Warhol'
      }
    }, {
      id: 7,
      title: 'Even Awesomer',
      curator: {
        id: 100,
        name: 'T.S. Eliot'
      }
    }]
  }, {
    id: 2,
    title: 'Other Article',
    collections: [{
      id: 2,
      title: 'Neverhood',
      curator: {
        id: 120,
        name: 'Ada Lovelace'
      }
    }],
    author: {
      id: 2,
      name: 'Pete Hunt'
    }
  }]
}

Object.freeze(input)

const normalizedData = normalize(input, feed)

fs.writeFile(outputFilename, JSON.stringify(normalizedData), (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('save successfully')
  }
})
