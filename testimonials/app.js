const svgIcon=document.querySelectorAll('svg');
const person=document.querySelectorAll('.person');

function nextClick(){
    person[1].classList.remove('display');
    person[0].classList.add('display');
}

function prevClick(){
    person[0].classList.remove('display');
    person[1].classList.add('display');
}

svgIcon[0].addEventListener('click',prevClick)
svgIcon[2].addEventListener('click',prevClick)
svgIcon[1].addEventListener('click',nextClick)
svgIcon[3].addEventListener('click',nextClick)

document.onkeydown = function (e){
    switch(e.key){
        case 'ArrowRight':
            nextClick();
            break;
        case 'ArrowLeft':
            prevClick();
            break;
    }
}