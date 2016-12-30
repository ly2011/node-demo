import { normalize, schema } from 'normalizr'
import fs from 'fs'
import path from 'path'

const outputFilename = path.join('logs', 'articles.json')

const originalData = {
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }, {
      "id": "325",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }, {
      "id": "326",
      "commenter": {
        "id": "3",
        "name": "ly2011"
      }
    }
  ]
}
const multiData = [{
  id: 1,
  title: 'Some Article',
  author: {
    id: 1,
    name: 'Dan'
  }
}, {
  id: 2,
  title: 'Other Article',
  author: {
    id: 1,
    name: 'Dan'
  }
}]

// Define a users schema
const user = new schema.Entity('users')
// const user = new schema.Entity('users', {}, { idAttribute: 'id_str' })

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
})

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
})

const userListSchema = new schema.Array(user)

const normalizedData = normalize(originalData, article)
const normalizedMultiData = normalize(multiData, userListSchema)
fs.writeFile(outputFilename, JSON.stringify(normalizedMultiData), (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('save successfully')
  }
})
