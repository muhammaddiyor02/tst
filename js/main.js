let elInp = document.querySelector('.inp')
let elTit = document.querySelector('.tit')


function fn(){
let pass = elInp.value.match(/[0-10]/gi) 
 
    elTit.textContent = pass.reduce((a, c)=>  Number(a) + Number(c))
}



