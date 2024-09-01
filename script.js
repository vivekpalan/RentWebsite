const navLinks = document.querySelector('.navlinks');
const menu = document.querySelector('.menu');
const prev=document.querySelector('.left');
const next=document.querySelector('.right');
const img=document.querySelectorAll('.img');
const cursor = document.querySelector('.cursor-follower');
const cursorBorder = document.querySelector('.cursor-border');
const mainWindow = document.querySelector('#main');
const controlsBtn = document.querySelectorAll('.btn');
const imgGridContainer = document.querySelector('.image-grid-container');
const formDisplay = document.querySelector('.form-container')
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
const heroSec = document.querySelector('.hero-section');
const anchor = document.querySelectorAll('a')

console.log(anchor)
mainWindow.addEventListener('mousemove',(e)=>{
    let cursorX = e.pageX;
    let cursorY = e.pageY;
    cursor.style.top = `${cursorY - 10}px`;
    cursor.style.left = `${cursorX - 10}px`;
    
    cursorBorder.style.top = `${cursorY - 50}px`;
    cursorBorder.style.left = `${cursorX - 50}px`;
    
})

formDisplay.addEventListener('mouseenter',()=>{
    cursor.style.display = 'none'
    cursorBorder.style.display = 'none'
})

formDisplay.addEventListener('mouseleave',()=>{
    cursor.style.display = 'block'
    cursorBorder.style.display = 'block'
})

controlsBtn.forEach(e => {
    e.addEventListener('mouseenter',()=>{
        cursor.style.display = 'none'
        cursorBorder.style.display = 'none'
    })
    e.addEventListener('mouseleave',()=>{
        cursor.style.display = 'block'
        cursorBorder.style.display = 'block'
    })
})

anchor.forEach(e => {
    e.addEventListener('mouseenter',()=>{
        cursor.style.display = 'none'
        cursorBorder.style.display = 'none'
    })
    e.addEventListener('mouseleave',()=>{
        cursor.style.display = 'block'
        cursorBorder.style.display = 'block'
    })
})

imgGridContainer.addEventListener('mouseenter',()=>{
    cursor.style.display = 'none'
    cursorBorder.style.display = 'none'
})
imgGridContainer.addEventListener('mouseleave',()=>{
    cursor.style.display = 'block'
    cursorBorder.style.display = 'block'
})


// heroSec.addEventListener('mouseenter',()=>{
//     nextBtn.style.marginRight='0px'
//     prevBtn.style.marginLeft='0px'  
// })
// heroSec.addEventListener('mouseleave',()=>{
//     nextBtn.style.marginRight='-50vh'
//     prevBtn.style.marginLeft='-50vh'
// })
// const yearCopy = document.querySelector('.year');

// const d = new Date();
// yearCopy.innerHTML = d.getFullYear();

// console.log(img.length)
let counter=0;

menu.addEventListener('click',()=>{
    navLinks.classList.toggle('close')
})

next.addEventListener('click',()=>{
    counter++;
    img.forEach((element) => {
        if(counter>3){
            counter=3;
        }
        else{
            element.style.transform=`translateX(${-counter*100}%)`;
        }
    });

})

prev.addEventListener('click',()=>{  
    counter--;
    img.forEach((element) => {
        if(counter<0){
            counter=0;
        }
        else{
            element.style.transform=`translateX(${-counter*100}%)`;
        }
    });

    // img[counter].style.transform=`translateX(${100}%)`

})

const input=document.querySelector('.input');

if(input.value.length===20){
    console.log('Not more than 20 characters')
}
else{
    
}



// const cards=document.querySelector('.card1');
// const hr = document.querySelector('.hr');
// const min = document.querySelector('.min');
// const sec = document.querySelector('.sec');



// setInterval(()=>{
//     const d = new Date();
//     hr.innerHTML=Math.abs(d.getHours()-24)
//     min.innerHTML=Math.abs(d.getMinutes()-60);
//     sec.innerHTML=Math.abs(d.getSeconds()-60);

// },1000)


const anchorTags = document.querySelectorAll('h4>a');

anchorTags.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        navLinks.classList.add('close')
    })
})

//For removing the navigation container in mobile view when scrolling
window.onscroll=function(){
    if(navLinks.classList.contains('close')){
        // console.log('do nothing')
    }
    else{
        navLinks.classList.add('close')
    }
}

const plus=document.querySelector('.plus');
const minus=document.querySelector('.minus');
const inputBox=document.querySelector('.input-box');
const error=document.querySelector('.error');


// inputBox.value=1
// plus.addEventListener('click',()=>{
//     if(inputBox.value>=5){
//         console.log('Value cant be greater than 5');  
//         error.innerHTML="<h4 style='color:green;'>Counter can't be greater than 5 </h4>" 
//     }
//     else{
//         inputBox.value++;

//     }
// })

// minus.addEventListener("click",()=>{
//     redirect('newpage.html')
//     if(inputBox.value<=0){
//         error.innerHTML="<h4 style='color:red;'>Counter can't be negative</h4>"
//     }
//     else{
//         inputBox.value--;

//     }
// })


// Portfolio img hover

// const portfolio=document.querySelector('.portfolio-sec');
// const imgHover=document.querySelector('.img-hover');
// const imgHoverimg=document.querySelector('.img-hover img');

// console.log(imgHover)

// portfolio.addEventListener('mousemove',(e)=>{
//     console.log('mouse moved',e);
    

//     const boundVal = portfolio.getBoundingClientRect();
//     const topVal = boundVal.y;
//     const rightVal = boundVal.height;

//     // console.log(boundVal)
//     // console.log(topVal,rightVal,e.clientX,e.clientY)
//     // console.log(e.clientY)
//     // console.log(topVal,rightVal);

//     // console.log(rightVal-e.clientX,e.clientY-topVal)

//     const clientValY=e.clientY-topVal;
//     const clientValX=e.clientX-rightVal;

//     // console.log('VALUES:',clientValX,clientValY)

//     imgHover.style.top= e.y-400+'px';
//     imgHover.style.left= e.x-100+'px';
// })

// portfolio.addEventListener('mousenter',()=>{
//     imgHover.style.display='block'
// })

// portfolio.addEventListener('mouseleave',()=>{
//     imgHover.style.display='none'
// })


const allCards = document.querySelectorAll('.cards');

allCards.forEach((elem)=>{
    elem.addEventListener('mouseover',()=>{
        const elemBound = elem.getBoundingClientRect();

        const x=elemBound.x;
        const y=elemBound.y;

        const xPercentage = x/elemBound.width;
        const yPercentage = y/elemBound.height;

        elem.style.transform = `rotateZ(${xPercentage}%,${yPercentage}%)`;
        
    })
})



const buyBtn = document.querySelector('.buy');
let countValue=0;

buyBtn.addEventListener("click",()=>{
    if(countValue==1){
        
    }
    else{
        inputBox.value++;
        countValue++;
    }

})




// window.onload=()=>{
//     setTimeout(()=>{
//         const newsContainer = document.createElement('div');
//         newsContainer.classList.add('new-container');
//         const newsLetter = document.createElement("div");
//         newsLetter.classList.add('news-letter');
    
//         const inputEmail = document.createElement('input');
//         inputEmail.setAttribute("type","email");
//         inputEmail.setAttribute("placeholder","Enter your email");
//         newsLetter.appendChild(inputEmail);
//     },10000)

// }


// const nextButton = document.querySelector('.next-second');
// const previousButton = document.querySelector('.prev-second');
// const imgSlider = document.querySelectorAll('.images-slider');
// let count = 0;

// nextBtn.addEventListener("click",()=>{
//     count++;
//     imgSlider.forEach((element)=>{
//         element.style.transform = `translateX(${-count*100})%`;
//     })
// })


// previousButton.addEventListener("click",()=>{
//     count--;
//     imgSlider.forEach((element)=>{
//         element.style.transform = `translateX(${-count*100})%`;
//     })
    
// })












// const navBar = document.querySelector('.navbar');

// navBar.addEventListener('scroll',()=>{
//     console.log('scrolled')
// })

// function menuClose(){
//     console.log('menu close function works')
//     navLinks.classList.add('close')
// }



// input.addEventListener("keydown",(e)=>{

//     const inputValue = e.target.value.length+1;
//     if(inputValue>=40){
//     //    alert('Maximum 20 characters is allowed')
//        input.value=''
//        const errorMessage = document.querySelector('.error-message');
//        errorMessage.innerHTML = 'Maximum 40 characters is allowed';
//        errorMessage.style.display = 'block';
//        errorMessage.style.color = 'red';
//        errorMessage.style.fontWeight = 'bold';
//     }
    
// })