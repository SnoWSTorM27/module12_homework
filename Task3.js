/*Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа. */

function Task3() {
    function objWithoutPrototype() {
        const name = {}
        name.__proto__ = null;
        return name;
    }        
    
    const obj1 = objWithoutPrototype();
    console.log(obj1)
    console.log(obj1.__proto__)
    
    


}