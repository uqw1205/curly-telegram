// window.alert('头像可闪烁')
var headPng = document.getElementsByClassName('head-png')[0],
    mainCon = document.getElementsByClassName('main')[0],
    wrapperCon = document.getElementsByClassName('wrapper')[0],
    canvas2 = document.getElementsByClassName('canvas2')[0],
    canvas1 = document.getElementsByClassName('canvas1')[0],
    context1 = canvas1.getContext('2d'),
    context2 = canvas2.getContext('2d');

context1.beginPath();
context1.moveTo(40,20);
context1.lineTo(20,30);
context1.lineTo(40,40);
context1.stroke();

context2.beginPath();
context2.moveTo(20,20);
context2.lineTo(40,30);
context2.lineTo(20,40);
context2.stroke();

var flag =false;
canvas1.addEventListener('click',function(){
    if(mainCon.style.opacity == '1'){
        return;
    } else {
        mainCon.className = mainCon.className.replace(' disappear','');
        wrapperCon.className = wrapperCon.className.replace(' appear','');
        flag = false;
    }
},false)

var handle = function(){
    if(!flag){
        mainCon.className = mainCon.className + ' disappear';
        wrapperCon.className = wrapperCon.className + ' appear';
        flag = true;
    }
};
canvas2.addEventListener('click',handle,false);
// canvas2.removeEventListener('click',handle,false);

