const del = require('../controllers/delete')
const get = require('../controllers/get')
const post = require('../controllers/post')
const put = require('../controllers/put')

module.exports = (app) => {
  app.get('/', (req, res) => {
    // feed or nappy
    // get all
    // get one
  })

  app.delete('/', (req, res) => {
    del.removeOne(req, res)
  })

  app.post('/', (req, res) => {
    post.createOne(req, res)
  })

  app.put('/', (req, res) => {
    put.updateOne(req, res)
  })
}