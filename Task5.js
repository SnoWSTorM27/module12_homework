/*Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.*/



function Task5(){
    class ElectricalAppliance {
        constructor(name) {
        this.name = name,
        this.state ='off' 
        }
        setState (state){
        this.state = state;
        console.log (`${this.name} is power ${this.state}`)
        
        }  
    }
    class HeatElectricalAppliance extends ElectricalAppliance {
        constructor(capacity,name){
            super(name)
            this.name = name,
            this.capacity = capacity
        }    
    }
    
    const kettle = new HeatElectricalAppliance(2000,'kettle');
    const hoover = new ElectricalAppliance('hoover');
    const iron = new HeatElectricalAppliance(1500,'iron');
    const toster = new HeatElectricalAppliance(1000,'toaster');
    
    
    kettle.setState('on')
    hoover.setState('off')
    toster.setState('on')
    iron.setState('on')

    console.log(hoover)
    console.log(kettle)
    console.log(toster)
    console.log(iron)
    
    let appliances = [kettle, hoover, toster,iron]
    console.log(appliances)
    
    function getTotalCapacity(){
        return appliances.reduce((accumulator,appliance) => appliance.state =='on'? accumulator + appliance.capacity: accumulator, 0) 
              
    }
    let total = getTotalCapacity()
    console.log(`Общая мощность включенных приборов ` + total + ` Ватт`)
} 
