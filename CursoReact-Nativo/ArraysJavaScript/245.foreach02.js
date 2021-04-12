//Replicando o método forEach

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
//Replicando o método forEach

const array = ['Aries', 'Touro', 'Gemeos', 'Cancer']
array.forEach2((a, indice, array) => {
    console.log(`${indice + 1}º ${a} ${array}`)
})