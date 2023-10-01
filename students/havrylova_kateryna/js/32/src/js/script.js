
// const car = {
//     manufacturer: 'Hyundai ',
//     model: 'Kona N line',
//     year: '2023',
//     averageSpeedInKm: 100,
//     fuelCapacityInL: 38,
//     fuelConsumptionInL: 5,
//     drivers: 'Oleg, Iryna, Alina,'
// };
// const userDistance = +prompt('Enter your future distance trip');
// const averageSpeed = car.averageSpeedInKm;
// const fuelConsumption = car.fuelConsumptionInL;

// // function distanceTime(distanceInKm) { 
// //     const roadWithoutStop = 4; 
// //     const maxRideHours = 4; 
// //     let rideHours = distanceInKm / averageSpeed; 
// //     if (rideHours > maxRideHours) { 
// //         for (let i = 1; i < rideHours; i++) { 
// //             if (i % 4 == 0) { 
// //                 rideHours++; 
// //             } 
// //         } 
// //         console.log('You will need ' + rideHours + ' hours for the road'); 
// //     } else { 
// //         console.log('You will need ' + rideHours + ' hours for the road'); 
// //     } 
// //     return rideHours; 
// // } 

// function distanceTime(distanceInKm) {
//     const maxRideHours = 4;
//     const hoursWithoutStop = distanceInKm / averageSpeed;
//     let rideHours = hoursWithoutStop;
//     if (hoursWithoutStop > maxRideHours) {
//         for (let i = 4; i < hoursWithoutStop; i = i + 4) {
//             rideHours++;
//         }
//         console.log('You will need ' + rideHours + ' hours for the road');
//     } else {
//         console.log('You will need ' + rideHours + ' hours for the road');
//     }
//     return rideHours;
// }

// const userDistanceTime = distanceTime(userDistance);


// function distanceFuelConsumption() {
//     return (fuelConsumption / 100 * userDistance);
// }
// const userFuelConsumption = distanceFuelConsumption(userDistance);
// console.log(userFuelConsumption);




function foo(event) {
    console.log(event.target, event.currentTarget);
    // if (event.target === event.currentTarget) {
    // alert(111);
    // }
}

const nav = document.getElementById('menu');

// nav.onclick = foo;

// nav.addEventListener('click', foo, true);

nav.addEventListener('click', foo);

document.body.addEventListener('click', foo);

nav.removeEventListener('click', foo); //видалення події - передаєм ти самі параметри що і пристворенні

const menuSapn = document.querySelector('.menu__link span');

menuSapn.addEventListener('click', foo);
// console.log(menuSapn)


const menuFirstLink = document.querySelector('.menu__link');

menuFirstLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (confirm('?')) {
        location.href = this.getAttribute('href');
    }
});


const button = document.querySelector('.my-first-button');



// console.log(button);

button.addEventListener('click', function (e) {
    e.stopPropagation();
    e.stopImmediatePropagation();

    const className = this.classList.value;
    const text = this.textContent;
    console.log(className, text);

    this.classList.replace(className, text);
    this.textContent = className;

});

// button.addEventListener('click', function () {
//     console.log(111);
// });


function modal(options = {}) {
    options = {
        openClassName: 'open',
        selector: '.modal',
        modalContentSelector: '.modal__content',
        modalHeaderSelector: '.modal__header',
        closeModalSelector: '.modal__close',
        triggerElementSelector: '.open-modal',
        isAutoOpen: false,
        content: '',
        header: '',
        ...options
    }
    console.log(options);
    const openModalTriggerElement = document.querySelector(options.triggerElementSelector);
    const modalElement = document.querySelector(options.selector);

    openModalTriggerElement.addEventListener('click', openModal);

    modalElement.addEventListener('click', (e) => {
        if ((e.target === e.currentTarget) || e.target.closest(options.closeModalSelector)) {
            closeModal();
        }
    });

    // console.log(openModalTriggerElement, modalElement);

    if (options.content) addContent(options.content);
    if (options.header) addHeader(options.header);

    if (options.isAutoOpen) openModal();

    function openModal() {
        modalElement.classList.add(options.openClassName);

        if (options.onOpenModal && typeof options.onOpenModal === 'function') {
            options.onOpenModal();
        }
    }

    function closeModal() {
        modalElement.classList.remove(options.openClassName);

    }


    function addContent(content) {
        modalElement.querySelector(options.modalContentSelector).innerHTML = content;
    }

    function addHeader(headerContent) {
        modalElement.querySelector(options.modalHeaderSelector).innerHTML = headerContent;
    }

    return {
        openModal,
        closeModal,
        addContent,
        addHeader,
    }

}

const myModal = modal({
    // selector: '.modal',
    // triggerElementSelector: '.open-modal',
    // isAutoOpen: false,
    content: '<p class="modal__text">shjfghjs</p>',
    header: '<h4 class="modal__title">dfkhghjegf</h4>',
    onOpenModal: function () {
        console.log('opened');
    },
});


const input = document.querySelector('.add-content-modal');
input.addEventListener('change', function () {
    console.log(this.value);
    myModal.addContent(this.value);
});

setTimeout(function () {
    myModal.openModal();

    setTimeout(function () {
        myModal.closeModal();
    }, 1000);
}, 5000);

