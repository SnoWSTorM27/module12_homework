/* Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

function Task2() {
    const obj = {
        name : "armchair",
        color : "black",
        material : "leather",
        price : 40000,
        tracery : "cell"
    } 

    function isPropertyInObject (property, object) {
        var condition = false; 
        for (const key in object) {
            if (property == key ) {
                condition = true
                break    
            } else {
                condition = false
            }
        }  
        return condition      
    }

    console.log(isPropertyInObject("price",obj))
    
}
