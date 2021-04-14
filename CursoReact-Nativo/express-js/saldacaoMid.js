function saldacao (nome){
    return function (req, res, next) {
        res.send(`Saldação ${nome}`)
        next()
    }
}

module.exports = saldacao