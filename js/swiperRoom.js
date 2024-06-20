let slider = new Swiper('.swiperM', {
    pagination: {
        el: '.swiper-paginationM',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.swiper-button-nextM1',
        prevEl: '.swiper-button-prevM1',
    },  
});