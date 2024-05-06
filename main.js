const questionBtns = document.querySelectorAll('.faq-title-container')
const accordionDescription = document.querySelectorAll('.faq-paragraph')
const plusBtns = document.querySelectorAll('.plus-icon')
const minusBtns = document.querySelectorAll('.minus-icon')

questionBtns.forEach( (btn, index) => {

    btn.addEventListener('click', function(){

        accordionDescription[index].classList.toggle('inactive')
        plusBtns[index].classList.toggle('inactive')
        minusBtns[index].classList.toggle('inactive')
        
    })

})

