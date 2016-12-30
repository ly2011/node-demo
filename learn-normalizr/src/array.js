/**
 * 规范化数组
 * 后端返回的数据往往是一串数组居多，此时规范化起到很大的作用，规范化的同时将数据压缩了一遍；
 */

import { normalize, schema } from 'normalizr'
import fs from 'fs'
import path from 'path'

const outputFilename = path.join('logs', 'array.json')

const input = [{
  id: 1,
  type: 'articles',
  title: 'Some Article'
}, {
  id: 2,
  type: 'articles',
  title: 'Other Article'
}, {
  id: 1,
  type: 'tutorials',
  title: 'Some Tutorial'
}]

Object.freeze(input)

// 例子1: sample

//  定义 `schema`
// const article = new schema.Entity('articles')
// const articleListSchema = [article]

// or ==
// const articleListSchema = new schema.Array(article)

// 例子2; 抽离多个 schema
const article = new schema.Entity('articles')
const tutorial = new schema.Entity('tutorials')
const schemaAttribute = 'type'
// const articleOrTutorial = new schema.Entity('articleOrTutorial', {
//   articles: article,
//   tutorials: tutorial
// })
const articleListSchema = new schema.Array({
  articles: article,
  tutorials: tutorial
}, 'type')
const normalizedData = normalize(input, articleListSchema)

fs.writeFile(outputFilename, JSON.stringify(normalizedData), (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('save successfully')
  }
})
