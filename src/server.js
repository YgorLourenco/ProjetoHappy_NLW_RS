// Importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express();
server

    // utilizar body do req
    // essa função extende as funcionalidades do urlencoded e pegar as informações do pages.js
    .use(express.urlencoded({extended: true}))
    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // Configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

     
    // Rotas da Aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
 //   .get('/', (req, res) => {
        //.send e uma função que vai enviar algo pro response
        //.sendFile vai mandar o arquivo do site para o response
 //       const city = req.query.city
 //       return res.render('index', {city})
 //   })

//  ligar o servidor
server.listen(5500)