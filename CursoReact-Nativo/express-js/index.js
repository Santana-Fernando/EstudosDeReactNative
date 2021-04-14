const express = require('express')
const app = express()
const saldacao = require('./saldacaoMid')
const bodyParser = require('body-parser')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param')

app.get('/usuario', usuarioApi.salvar)
app.post('/usuario', usuarioApi.obter)

//app.use(saldacao('Fernando'))

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    /*let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })

    req.on('end', () =>{
    })*/
    res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})


app.get("/", (req, res, next) => {
    res.json(
        {
            data: [
                { name: "Fernando", idade: 21, Signo: "Aries" },
                { name: "Cassia", idade: 19, Signo: "Capricórnio" }
            ],
            limit: 30,
            skip: 0,
            count: 3,
            status: 2000
        }
    )

    next()
    // res.json([
    //     {
    //         name: "Fernando",
    //         idade: 21,
    //         Signo: "Aries"
    //     },
    //     {
    //         name: "Cassia",
    //         idade: 19,
    //         Signo: "Capricórnio"
    //     }
    // ])

    // res.json({
    //     name: "Fernando",
    //     idade: 21,
    //     Signo: "Aries"
    // })

    //res.send('\n<h1>O fernando</h1><br><h2>é lindo</h2>\n')
})

app.use("/", (req, res) => {
    console.log('Fui chamado eba?')
})

app.listen(3000, () => console.log("Tudo ok"));