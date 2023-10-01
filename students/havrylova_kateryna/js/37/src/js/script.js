import myAjax from "./myAjax.js";
import myAjaxPromise from "./myAjaxPromise.js";
import myFetch from "./myFetch.js";


const url = 'https://jsonplaceholder.typicode.com/users';

// function renderUser(posts, users) {
//     console.log(posts, users, 'renderUser');
// data.forEach(user => {
//     console.log(user);
// });
// }


function renderUser(users) {
    const ul = document.getElementById('userId');
    const fragment = document.createDocumentFragment();

    users.forEach(user => {
        console.log(user);
        // const li = `<li>${user.id}.
        // ${user.username}</li>`;
        // ul.insertAdjacentHTML('beforeend', li);

        const li = document.createElement('li');
        const text = 'Id. ' + user.id + '. User name: ' + user.username + '.';
        li.append(text);
        fragment.append(li);

    });
    ul.append(fragment);
}

// myAjax({
//     url
// }, renderUser)

// myAjax(
//     {
//         method: 'POST',
//         url
//     },
//     (data) => {
//         console.log(data);
//     },
//     {
//         name: 'Viktor',
//         age: 15,
//     }
// );

function getData(users) {
    myAjax(
        {
            url: 'https://jsonplaceholder.typicode.com/posts'
        },
        (posts) => {
            renderUser(posts, users);
        }
    );
}

// myAjaxPromise({
//     url
// }).then((data) => {
//     console.log(data)
// }).catch((xhr) => {
//     console.log(xhr)
// }).finally(() => {
//     console.log(111)
// })

// const userPromise = myAjaxPromise({ url });
// const postPromise = myAjaxPromise({
//     url: 'https://jsonplaceholder.typicode.com/posts'
// });

// Promise.all([userPromise, postPromise])
//     .then((data) => {
//         console.log(data)
//     })


// Promise.allSettled

myFetch(url).then((users) => {
    renderUser(users);
});

myFetch(url, {
    method: 'POST',
    body: JSON.stringify({
        name: 'Viktor',
        age: 22,
    }),
    headers: {
        'Content-type': 'application/json',
    }
}).then((data) => {
    console.log(data);
});


// const a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('dfkgjhhfg');
//         reject('error');
//     }, 5000);
// });

// a.then((data) => {
//     console.log(data);
// })

// a.catch((data) => {
//     console.log(data);
// })

// a.finally(() => {
//     console.log(222);
// })

// setTimeout(() => {
//     console.log(1);
// });


// console.log(2);
// console.log(3);


// for (var i = 0; i < 10; i++) {
//     // console.log(i);
//     // setTimeout(() => {
//     //     console.log(i);
//     // });
//     s(i);
// }

// function s(i) {
//     setTimeout(() => {
//         console.log(i);
//     });
// }

// const url = 'https://jsonplaceholder.typicode.com/users';

// const xhr = new XMLHttpRequest();

// xhr.responseType = 'json';

// // xhr.onreadystatechange = () => {
// //     // UNSENT = 0; исходное состояние
// //     // OPENED = 1; вызван метод open
// //     // HEADERS_RECEIVED = 2; получены заголовки ответа
// //     // LOADING = 3; ответ в процессе передачи (данные частично получены)
// //     // DONE = 4; запрос завершён
// //     console.log(xhr.readyState, xhr.status);
// //     console.log(xhr.readyState);
// //     if (xhr.readyState === 4 && xhr.status < 400) {
// //         console.log(xhr.response);
// //     } else if (xhr.readyState === 4 && xhr.status >= 400) {
// //         console.error(xhr.status);
// //     }
// // };

// xhr.onload = () => {
//     if (xhr.status < 400) {
//         // console.log(JSON.parse(xhr.response));
//         console.log(xhr.response);
//     } else {
//         console.error(xhr.status);
//     }
// }

// xhr.onerror = (e) => {
//     console.error(e);
// }

// xhr.onprogress = (e) => {
//     if (e.lengthComputable) {
//         console.log(`Loaded ${e.loaded} to ${e.total}`);
//     } else {
//         console.log(`Loaded ${e.loaded}`);

//     }
// }

// xhr.open('GET', url);

// xhr.send();

// console.log(xhr.response, 'dfghhj');


