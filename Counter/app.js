let decrease = document.getElementById("dec");
let reset = document.getElementById("res");
let increase = document.getElementById("inc");

let value = document.getElementById("number");
let count = 0;

decrease.addEventListener('click',function(){
    count -=1;
    value.innerHTML = count;
})

reset.addEventListener('click',function(){
    count = 0;
    value.innerHTML = count;
})

increase.addEventListener('click', function(){
    count += 1;
    value.innerHTML = count;
})


