downs = document.querySelectorAll('.down')
sums = document.querySelectorAll('.summary')
intro = document.querySelectorAll('.intro')
for (let i = 0; i < sums.length; i++) {
    sums[i].value = i 
    downs[i].value = i
    intro[i].value = i
}
for (let i = 0; i < downs.length; i++) {
    downs[i].addEventListener("click",function (e){
        if(!("invi" == sums[e.target.value].classList[1])){
            sums[e.target.value].classList.add("invi")
            intro[e.target.value].classList.remove("intro-active")
            e.target.classList.remove('down-active')
        }else{
            for (let j = 0; j < downs.length; j++){
                sums[j].classList.add("invi")
                intro[j].classList.remove("intro-active")
                downs[j].classList.remove('down-active')
            }
            sums[e.target.value].classList.remove("invi")
            intro[e.target.value].classList.add("intro-active")
            e.target.classList.add('down-active')
        }
    })
}