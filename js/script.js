let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let nam1=document.querySelector('.nam1').textContent;
;
let nam2=document.querySelector('.nam2').textContent;
let nam3=document.querySelector('.nam3').textContent;
let nam4=document.querySelector('.nam4').textContent;


let price1=document.querySelector('#price1').textContent;
let price2=document.querySelector('#price2').textContent;
let price3=document.querySelector('#price3').textContent;
let price4=document.querySelector('#price4').textContent;
//console.log(price1); console.log(price2); console.log(price3); console.log(price4);

let list = document.querySelector('ol');

btn1.addEventListener('click',(e) =>{
    e.preventDefault();

   // console.log("click r15");

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nam1}   ${price1}` + " "));

    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'x';
    li.appendChild(link);
    list.appendChild(li);
});

//btn-2
btn2.addEventListener('click',(e) =>{
    e.preventDefault();

   // console.log("click r15");

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nam2}   ${price2}` + " "));

    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'x';
    li.appendChild(link);
    list.appendChild(li);
});

//btn-3
btn3.addEventListener('click',(e) =>{
    e.preventDefault();

   // console.log("click r15");

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nam3}   ${price3}` + " "));

    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'x';
    li.appendChild(link);
    list.appendChild(li);
});

//btn-4
btn4.addEventListener('click',(e) =>{
    e.preventDefault();

   // console.log("click r15");

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nam4}   ${price4}` + " "));

    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'x';
    li.appendChild(link);
    list.appendChild(li);
});


//remove list
list.addEventListener('click', (e) => {

    

    if (e.target.hasAttribute('href')) {
  
        if (confirm('Are you sure ?')) {
    
          let ele = e.target.parentElement;
          ele.remove();
        }
      }


});





