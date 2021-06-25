const express = require('express')
const route = require('./route')
const path = require('path')

// Iniciando servidor
const server = express()

// Definindo a view engine
server.set('view engine', 'ejs')

// Usar a pasta public para acessar os arquivos HTML e CSS
server.use(express.static("public"))

// Definindo caminho da pasta views
server.set('views', path.join(__dirname, 'views'))

// Configurar o middle (Decodificar o conteudo do formulario)
server.use(express.urlencoded({extended: true}))

// Usar as rotas
server.use(route)

// Definindo porta
server.listen(3000, () => console.log('RODANDO'))