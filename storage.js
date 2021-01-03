
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
    getKeys(drinkName) {
        if (drinkName === NaN || drinkName === false || drinkName === '' || drinkName == +(drinkName) || drinkName === null){
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
    reset(drinkName) {
        for (let key in this.drinkStorage[drinkName]){
            this.drinkStorage[drinkName][key] = undefined
        }
    }
}

let blackAndWhite = new Storage();

blackAndWhite.addADrink('vodka');
blackAndWhite.addValue('vodka', 'price', 10)
blackAndWhite.addValue('vodka', 'alchocol', true)
blackAndWhite.addValue('vodka', 'hot', true)
blackAndWhite.addADrink('beer');
blackAndWhite.addValue('beer', 'price', 5)
blackAndWhite.addValue('beer', 'alchocol', true)
blackAndWhite.addValue('beer', 'hot', false)
blackAndWhite.addADrink('juice');
blackAndWhite.addValue('juice', 'price', 1)
blackAndWhite.addValue('juice', 'alchocol', false)
blackAndWhite.addValue('juice', 'hot', false)


let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function() {
    console.log('Все о пиве: ')
    console.log(blackAndWhite.getValue('beer'))
})

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function() {
    console.log('Цена сока: ')
    console.log(blackAndWhite.getValue('juice', 'price'))
})

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function() {
    console.log('Горяча ли водка: ')
    console.log(blackAndWhite.getValue('vodka', 'hot'))
})

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function() {
    console.log('Удалить цену сока: ')
    console.log(blackAndWhite.deleteValue('juice', 'price'))
})

let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', function() {
    let newObj = prompt('Введите имя напитка: ')
    blackAndWhite.addADrink(newObj)
    console.log(`Вы создали объект ${newObj}`)
    console.log(blackAndWhite.drinkStorage)
})

let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', function() {
    let obj = prompt('Введите название напитка, в отношении которого создается (изменяется) свойство');
    let prop = prompt('Введите название свойства выбранного напитка')
    let val = prompt('Введите значение созданного (измененного) свойства')
    blackAndWhite.addValue(obj, prop, val);
    console.log(`Теперь объект ${obj} имеет свойство ${prop} со значнием ${val}`);
    console.log(blackAndWhite.drinkStorage[obj])
})

let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function() {
    let y = prompt('из какого объекта надо удалить свойство?')
    let x = prompt('какое свойство надо удалить?')
    console.log(`Удалить свойство ${x} из объекта ${y}: `)
    console.log(blackAndWhite.deleteValue(y, x))
})


let btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', function() {
    let obj = prompt('Введите название объекта');
    let prop = prompt('Введите название свойства')
    console.log(blackAndWhite.getValue(obj, prop))
})

let btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', function() {
    let obj = prompt('Введите название очищаемого объекта. ')
    blackAndWhite.reset(obj)
    console.log(blackAndWhite.drinkStorage[obj])
})

let btn10 = document.querySelector('#btn10');
btn10.addEventListener('click', function() {
    let obj = prompt('Имя объекта');
    console.log(blackAndWhite.getKeys(obj)); 
})

