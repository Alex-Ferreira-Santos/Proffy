

//Servidor
const express = require('express') //importa o express
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
// configurar arquivos estáticos(css,scrpts,imagens)

.use(express.static("public")) // rotas da aplicação
.get("/"/* coloca como você quer que o arquivo seja chamado */,pageLanding) //retorna o html
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500) //ativa o servidor na porta colocada




