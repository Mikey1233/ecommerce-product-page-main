'use strict'
const subImage = document.querySelector('.sub-shoe');
const mainImage = document.querySelector('.main');
const logo = document.querySelector('.logo');
const body = document.querySelector('body')
//dark mode
logo.addEventListener(
    'click',()=>{
    body.classList.toggle('active')
    }
)
//creating an array of background
const backGround = ['url(images/image-product-1.jpg)','url(images/image-product-2.jpg)','url(images/image-product-3.jpg)','url(images/image-product-4.jpg)'];
for (let i = 0;i < backGround.length;i++) {
    subImage.children[i].addEventListener(
        'mouseover',()=> {
            mainImage.style.background = backGround[i];
            mainImage.style.backgroundSize = 'cover'
           mainImage.style.backgroundPosition = 'top 10% ,center'
            mainImage.style.backgroundRepeat = 'no-repeat';
        }
    )
}
//cart system
let plus = document.querySelector('.p')
let minus = document.querySelector('.m')
let addCart = document.querySelector('.add')
let smallCart = document.querySelector('.cart-num')
let BigNum = document.querySelector('.num')
let papa = document.querySelector('.cart-control')
let digit= 0;
let alertNum = document.querySelector('.num2');
let cart = document.querySelector('.cart-box')
let num3 = document.querySelector('.num3');
let result = document.querySelector('.result')
let cartSum = 125
papa.addEventListener(
    'click', (e)=> {       
        if (e.target.matches('.p')) { 
          digit++;
          num3.innerText = digit;
          smallCart.innerText = digit;
          alertNum.innerText = digit
          BigNum.innerText = digit
          result.innerText = digit * cartSum
          smallCart.classList.add('active')
        } 
        else if (e.target.matches('.m') && digit > 0) {
            digit--;
            num3.innerText = digit
            result.innerText = digit * cartSum
            smallCart.innerText = digit
            alertNum.innerText = digit
            BigNum.innerText = digit
        }else if (e.target.matches('.m') && digit === 0) {
            smallCart.classList.remove('active')
        }
        }           
)
let moveBox = document.querySelector('.move-box')
addCart.addEventListener(
    'click',()=> {
        moveBox.style.display = 'block'
    }
)
let boy = document.querySelector('.boy')
boy.addEventListener(
    'click',()=> {
        moveBox.style.display = 'none'
    }
)
window.addEventListener(
    'click',(e)=> {
        if(e.target === moveBox) {
            moveBox.style.display ='none'
        }
    }
)
let trash = document.querySelector('#trash');
let text = document.getElementById('short-text')
trash.addEventListener(
    'click',()=>{
        digit = 0
        num3.innerText = digit;
        result.innerText = 0;
        smallCart.innerText = digit
        alertNum.innerText = digit
        BigNum.innerText = digit
    }
)
let trashBox = document.querySelector('#trashBox');
let haha = document.querySelector('.loo')
let svg = document.querySelector('.svg')
 trashBox.addEventListener(
    'click',()=> {
     digit =0
     num3.innerText = digit;
     result.innerText = 0;
     smallCart.innerText = digit
   alertNum.innerText = digit
    BigNum.innerText = digit
    }
 )
 svg.addEventListener(
    'click',()=> {
        cart.classList.toggle('active')
    }
 )
 smallCart.addEventListener(
    'click',()=> {
        cart.classList.toggle('active')
    }
 )
 window.addEventListener(
    'click', (e)=>{
        if (e.target.matches('div')) {
            cart.classList.remove('active')
        } else if (e.target.matches('header')) {
            cart.classList.remove('active')
        } else if (e.target.matches('p')) {
            cart.classList.remove('active')
        }
    }   
 )

//code for menu toggle
const wow = document.querySelector('.wow')
const ul = document.querySelector('ul')
wow.addEventListener(
    'click',()=> {
       ul.classList.add('active');
       body.classList.add('act')
    }
)
const xy = document.querySelector('.xy') 
    xy.addEventListener(
        'click',()=> {
            ul.classList.remove('active')
       body.classList.remove('act')

        }
    )
ul.addEventListener(
    'click',(e)=> {
       if (e.target.matches('li')) {
        ul.classList.remove('active')
       body.classList.remove('act')
       } 
    }
)
window.addEventListener(
    'click',(e)=> {
        if (e.target.matches('div')) {
        ul.classList.remove('active')
       body.classList.remove('act')
        } else if (e.target.matches('header')){
            ul.classList.remove('active')
       body.classList.remove('act')
        } else if (e.target.matches('.svg')){
            ul.classList.remove('active')
       body.classList.remove('act')
                  } 
        else if (e.target.matches('.user-pic')){
          ul.classList.remove('active')
       body.classList.remove('act')
                } 
    }
)
//Animations
    const sr  = ScrollReveal ({
        distance: '60px',
        duration : 2000,
        reset :true,
    })
sr.reveal('.sub-shoe',{delay:50,origin:'top'});
sr.reveal('.col-2',{delay:50,origin:'top'})
sr.reveal(mainImage,{delay:50,origin:'top'})
const sd  = ScrollReveal ({
    distance: '20px',
    duration : 2000,
    reset :true,
})
/*sd.reveal('ul',{Delay:100,origin:'top'})*/
sd.reveal('.user-pic',{Delay:100,origin:'top'})
sd.reveal('.svg',{Delay:100,origin:'top'})



