const backClick = document.querySelector(".backClick");
const backProject = document.querySelector(".backProject");
const overlay = document.querySelector(".overlay");
const pledge = document.querySelectorAll("input[type=radio]");
const thanks = document.querySelector(".thanks");
const done = document.querySelector(".done");
const btnStock = document.querySelectorAll(".btnStock");
const pledgeStart = document.querySelectorAll(".pledgeStart");
const donate = document.querySelector("#donate");
const donate1 = document.querySelector("#donate1");
const continuebtn = document.querySelectorAll(".continue");
const goal = document.querySelectorAll(".dataStat h2");
const stock = document.querySelectorAll(".stock h3");
const stock2 = document.querySelectorAll(".stock2");

backClick.addEventListener("click" , backProjectShow)

function backProjectShow(){
    backProject.classList.remove("hide");
    overlay.classList.remove("hide");
};

pledge[0].addEventListener("click",() =>{
    backProject.classList.add("hide");
    thanks.classList.remove("hide");
})

pledge[1].addEventListener("click",() =>{
    pledgeStart[0].classList.remove("hide");
})

pledge[2].addEventListener("click",() =>{
    pledgeStart[1].classList.remove("hide");
})

done.addEventListener("click",()=>{
    thanks.classList.add("hide");
    overlay.classList.add("hide");
    pledge[0].checked = false;
    pledge[1].checked = false;
    pledge[2].checked = false;
    pledgeStart[0].classList.add("hide");
    pledgeStart[1].classList.add("hide");
})

btnStock[0].addEventListener("click",() =>{
    if(parseInt(stock[0].textContent)===0){
        btnStock[0].parentElement.parentElement.classList.add("class3");
        let box = pledgeStart[0].parentElement;
        box.classList.add("class3");
    }
    backProjectShow();
});

btnStock[1].addEventListener("click",() =>{
    if(parseInt(stock[1].textContent)===0){
        btnStock[1].parentElement.parentElement.classList.add("class3");
        let box = pledgeStart[1].parentElement;
        box.classList.add("class3");
    }
    backProjectShow();
});

continuebtn[0].addEventListener("click",()=>{
    updateGoal(donate.value);
    stock[0].textContent = stock[0].textContent-1;
    stock2[0].textContent = stock2[0].textContent-1;
    backProject.classList.add("hide");
    thanks.classList.remove("hide");
})

continuebtn[1].addEventListener("click",()=>{
    updateGoal(donate1.value);
    stock[1].textContent = stock[1].textContent-1;
    stock2[1].textContent = stock2[1].textContent-1;
    backProject.classList.add("hide");
    thanks.classList.remove("hide");
})

function updateGoal(val){
    let newValue = goal[0].textContent.substring(1);
    newValue =  newValue.replace(/,/g,"");
    let donation = parseInt(val);
    newValue = parseInt(newValue) + donation;
    newValue = newValue.toLocaleString();
    goal[0].textContent = `$${newValue}`;
    let totalBackers = goal[1].textContent.replace(/,/g,"");
    totalBackers = parseInt(totalBackers)+1;
    totalBackers = totalBackers.toLocaleString();
    goal[1].textContent = totalBackers;
}
