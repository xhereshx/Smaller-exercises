'use strict';
 
/* let changeBulb = () => {
    let changeOne = document.querySelector('.bulbOff');
    changeOne.classList.toggle('bulbOn');
} */


class changeBulb {
 constructor(light) {
     this.light = light;
 }

 render() {
     let barElement = document.createElement('div');
     barElement.className = 'bulbOff';
     let lightBulbOn = () =>{

     }

     barElement.addEventListener('click', () => {
         this.update();
     });
     return barElement;
 }

 mount(parent) {
     this.element = this.render();
     parent.appendChild(this.element);
     this.update();
 }
update () {

    console.log(this.element);
    this.element.classList.toggle('bulbOff');
    this.element.classList.toggle('bulbOn');
    
    
}

};