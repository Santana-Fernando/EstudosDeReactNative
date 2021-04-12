let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThisArrow = (param) => console.log(this === param)

comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(module.exports)