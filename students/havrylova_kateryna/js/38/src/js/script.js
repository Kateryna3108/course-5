import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



// import Masonry from "masonry-layout";

// const grid = document.querySelector('.grid');
// const msnry = new Masonry(grid, {
//     itemSelector: '.grid-item',
//     columnWidth: 200,
//     percentPosition: true,
// });
