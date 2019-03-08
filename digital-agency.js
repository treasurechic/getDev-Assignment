
$(function () {


    //slider
    $('.anim-slider').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:3000
    });
        });

   
//for the nav scroll
function scroll(){
var nav = document.querySelector('nav');
var ypos = window.pageYOffset;
if(ypos > 400){
    nav.style.top = "0"
    nav.style.zIndex = '4'
    nav.style.position = "fixed";
}
else{
    nav.style.position = "relative";
}
}
window.addEventListener('scroll', scroll);



//modal popup

var modal = document.getElementById('modal');
var modalBg = document.querySelector(".modal-bg");
modal.addEventListener('click',(e)=>{
    e.preventDefault();
modalBg.classList.add('bg-active');

});

//get the link
const closeModal = document.querySelector(".modal-content .close");
// when its clicked
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalBg.classList.remove('bg-active');
})
// remove the .bg-active class from the modal




//toggle nav
$('.home').on('click',function(){
    if($('.hidden-menu').hasClass('hide')){
        $('.hidden-menu').removeClass('hide');
        $('.hidden-menu').addClass('show');
    }else{
        $('.hidden-menu').addClass('hide');
        $('.hidden-menu').removeClass('show');
    }
});
