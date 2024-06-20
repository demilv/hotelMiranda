const swiper = new Swiper('.swiper1', {  
    direction: 'horizontal',
    loop: true,  
  
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },  
  });

const swiper2 = new Swiper('.swiper2', {  
  direction: 'horizontal',
  loop: true,  

  pagination: {
    el: '.swiper-pagination2',
    clickable: true
  },  
});
  