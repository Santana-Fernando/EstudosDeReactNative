module.exports = (app, text) => {
    function salvar(req, res) {
        res.send('produto > salvar ' + text)
    }

    function obter(req, res) {
        res.send('produto > obter ' + text)
    }

    app.get('/produto', salvar)
    app.post('/produto', obter)
}