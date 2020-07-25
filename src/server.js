const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')
const server = express()

server.use(express.static('public')) //pasta de css e js auxiliares
server.use(express.urlencoded({ extended:true })) //habilita leitura de conteudo de req.body por post
server.use(methodOverride('_method'))
server.use(routes)

server.set('view engine', 'njk') // ( "tipo de engine" , "tipo de arquivo lido" )

//pasta dos arquivos / configurações aplicaveis
nunjucks.configure("src/app/views", {
    express:server,
    autoescape: false, //permite que cod html dentro de texto seja interpretado
    noCache: true //não guarda versões dos dados então sempre puxa do servidor
})

server.listen(5000,function(){
    console.log("Server running, LocalHost 5000")
})