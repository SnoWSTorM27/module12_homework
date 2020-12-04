/* Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */

function Task1() {
    const obj = {
        name : "armchair",
        color : "black",
        material : "leather",
        price : 40000,
        tracery : "cell"
    }     
    function ownProperty (object){
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                console.log (`${key} : ${object[key]}`);
                
            }
        }
         

    }

    ownProperty(obj);
}