let currentSlide = 0
let colors = ['tomato', 'skyblue', 'slategray']

let totalSlides = document.querySelectorAll('.slider--item').length

document.querySelector('.slide--width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`


function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }

    updateSlide();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }

    updateSlide();
}

function updateSlide(){
    let newMargin = currentSlide * document.querySelector('.slider--item').clientWidth

    let randomColor = Math.floor(Math.random() * 3)
    document.querySelector('.slide--width').style.marginLeft = `-${newMargin }px`

    document.querySelectorAll('.slider--item')[currentSlide].style.backgroundColor = `${colors[randomColor]}`
}

setInterval(goNext, 3000)

