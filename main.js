//click on strike through

const strikeThrough = function(event){
    event.target.style.textDecoration = 'line-through';
}

const olList = document.querySelectorAll('ol li')

for (const element of olList){
    element.addEventListener('click', strikeThrough);
}

//disappear on click
const ulList = document.querySelectorAll('ul li')

const zeroOpacity = function(event){
    event.target.style.opacity = 0;
}

for ( const element of ulList){
    element.addEventListener('click', zeroOpacity);
}

//disappear img on click
const imgList = document.querySelectorAll('#row');

const noImg = function(event){
    event.target.style.width = "0px";
}

for ( const element of imgList){
    element.addEventListener('click', noImg)
}

//disappear all
//why not working???
const btn = document.querySelector('#destroy-all');

const destroy = function(){
    for (const element of olList){
        element.style.textDecoration = 'line-through'
    }
    for ( const element of ulList){
        element.style.opacity = 0;
    }
    for ( const element of imgList){
        element.style.width = "0px"
    }
}

btn.addEventListener('click', destroy)
