
// Storage в файле Storage.js.
// Класс должен иметь методы:
// DrinkStorage - объект для хранения рецептов напитков. Ключом является название напитка, значением - информация о нём.
// reset() - очищает хранящиеся в объекте данные.
// addValue(key, value) - сохраняет значение под указанным ключом.
// getValue(key) - возвращает значение по указанному ключу.
// deleteValue(key) - удаляет значение с ключом, возвращает true если такое есть, либо false если нет.
// getKeys() - возвращает массив состоящий из одних ключей.






class Storage {
    constructor(){
        this.drinkStorage = {}
    }

    addADrink(drinkName){
        this.drinkStorage[drinkName] = {}
    }

    addValue (drinkName, key, value) {
        this.drinkStorage[drinkName][key] = value
    }

    getValue(drinkName, key = false){
        if (!key){
            return this.drinkStorage[drinkName]
        } else {
            return this.drinkStorage[drinkName][key]
        }
        
    }

    getKeys(drinkName = false, key = false) {
        if (drinkName === false && key === false){
            return Object.keys(this.drinkStorage)
        } else {
            return Object.keys(this.drinkStorage[drinkName])
        } 
        
    }

    deleteValue(drinkName, key){
        if (typeof this.drinkStorage[drinkName][key] === 'undefined'){
            return false
        } else {
            delete this.drinkStorage[drinkName][key]
            return true
        }
    }

    reset() {
        delete this.drinkStorage
        this.drinkStorage = {}
    }
}

let blackAndWhite = new Storage();


blackAndWhite.addADrink('Vodka');
blackAndWhite.addValue('Vodka', 'price', 10)
blackAndWhite.addValue('Vodka', 'alchocol', true)
blackAndWhite.addValue('Vodka', 'hot', true)
blackAndWhite.addADrink('Beer');
blackAndWhite.addValue('Beer', 'price', 5)
blackAndWhite.addValue('Beer', 'alchocol', true)
blackAndWhite.addValue('Beer', 'hot', false)
blackAndWhite.addADrink('Juice');
blackAndWhite.addValue('Juice', 'price', 1)
blackAndWhite.addValue('Juice', 'alchocol', false)
blackAndWhite.addValue('Juice', 'hot', false)



let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function() {
    console.log('Все о пиве: ')
    console.log(blackAndWhite.getValue('Beer'))
})

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function() {
    console.log('Цена сока: ')
    console.log(blackAndWhite.getValue('Juice', 'price'))
})

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function() {
    console.log('Горяча ли водка: ')
    console.log(blackAndWhite.getValue('Vodka', 'hot'))
})


let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function() {
    console.log('Удалить цену сока: ')
    console.log(blackAndWhite.deleteValue('Juice', 'price'))
})

let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function() {
    console.log('Удалить свойство объекта: ')
    let y = prompt('из какого объекта надо удалить свойство?')
    let x = prompt('какое свойство надо удалить?')
    console.log(blackAndWhite.deleteValue(y, x))
})






// console.log(blackAndWhite.getKeys())
// console.log(blackAndWhite.getKeys('Beer'));


