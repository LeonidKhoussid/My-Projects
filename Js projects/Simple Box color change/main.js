const button = document.querySelector('button');
const box = document.getElementById('changeMe');

function changeColor(){
    if(box.style.background == 'red'){
        box.style.background = 'blue';
    }else{
        box.style.background = 'red'
    }
   
}
