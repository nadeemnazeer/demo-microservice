const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const port = process.env.PORT

const documentController = require('./controller/document.controller')

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('API Version: '+process.env.npm_package_version)
  });

app.get('/documents', (req, res) => {
    documentController.getDocuments().then(data => res.json(data));
});

app.post('/document', (req, res) => {
  documentController.createDocument(req.body.document).then(data => res.json(data));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});