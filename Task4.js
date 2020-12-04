/*Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

function Task4(){
    function ElectricalAppliance (name){
        this.name = name,
        this.state ='off' 
    }
    ElectricalAppliance.prototype.setState = function(state){
        this.state = state;
        console.log (`${this.name} is power ${this.state}`)
        
    }  

    HeatElectricalAppliance.prototype = new ElectricalAppliance()

    function HeatElectricalAppliance(name, capacity){
        this.name = name,
        this.capacity = capacity
    }
    
    const kettle = new HeatElectricalAppliance('kettle', 2000);
    kettle.setBoil = function(){
        console.log("byl-byl")
    }
    const hoover = new ElectricalAppliance('hoover');
    const iron = new HeatElectricalAppliance('iron', 1500);
    const toster = new HeatElectricalAppliance('toaster', 1000);
    toster.makeToast = function() {
        console.log("toast is ready")
    }
    
    let appliances = [kettle, hoover, toster,iron]
    console.log(appliances)

    kettle.setState('on')
    hoover.setState('off')
    toster.setState('on')
    iron.setState('on')

    console.log(hoover)
    console.log(kettle)
    console.log(toster)
    console.log(iron)

    function getTotalCapacity(){
        return appliances.reduce((accumulator,appliance) => appliance.state =='on'? accumulator + appliance.capacity: accumulator, 0) 
              
    }
    let total = getTotalCapacity()
    console.log(`Общая мощность включенных приборов ` + total + ` Ватт`)
} 
