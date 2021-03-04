const svgIcon=document.querySelectorAll('svg');
const person=document.querySelectorAll('.person');


svgIcon[0].addEventListener('click',(e)=>{
    person[0].classList.remove('display');
    person[1].classList.add('display');
})

svgIcon[2].addEventListener('click',(e)=>{
    person[0].classList.toggle('display');
    person[1].classList.add('display');
})

svgIcon[1].addEventListener('click',(e)=>{
    person[1].classList.remove('display');
    person[0].classList.add('display');
})

svgIcon[3].addEventListener('click',(e)=>{
    person[1].classList.remove('display');
    person[0].classList.add('display');
})

