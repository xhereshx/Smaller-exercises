'use strict';

const app = document.querySelector('#app');

const bar1 = new ProgressBar(8, 17, 'red');
bar1.mount(app);

const bar2 = new ProgressBar(8, 17, 'green');
bar2.mount(app);

const bar3 = new ProgressBar(8, 17, 'blue');
bar3.mount(app);


const btnElm = document.querySelector('.btn');
btnElm.addEventListener ('click', () =>{
    btnElm.style.backgroundColor = `rgb(${bar1.value *15}, ${bar2.value *15}, ${bar3.value *15} )`
} )

//let test = bar1.value*15;
//console.log(test);
