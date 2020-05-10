let ul = document.querySelector('nav ul');
let li = document.querySelectorAll('nav ul li');

li.forEach(el => {
    el.addEventListener('click', ()=>{
        ul.querySelector('.ativo').classList.remove('ativo')

        el.classList.add('ativo');
    })
});

$(function () {
    $('.nav a').click(function () {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({ 'scrollTop': offSetTop });

        return false;
    })



    $('.btn').click(function () {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
        $('html,body, .banner').animate({ 'scrollTop': offSetTop });

        return false;
    })
});


// /* animação */
const target = document.querySelectorAll('[data-anime]');
const animationClass =  'animate';

function animeScroll(){
  console.log('wekfhsodfn');
};




window.addEventListener('srcool', function(){

    animeScroll();
})

