// console.dir(document);
// console.dir(document.documentElement);
// console.dir(document.head);
// console.dir(document.body);

// document.body.style.backgroundColor = "red";

const nav = document.getElementById('menu');

console.log(nav);
// const menu = '';
// console.log(menu);

// const menu = document.querySelector('#menu .menu');
const menu = nav.querySelector('.menu');
const menuItems = [...nav.querySelectorAll('.menu > li')];
console.log(menuItems);

// menuItems.forEach((menuItem, index) => {
//     if (!(index % 2)) menuItem.style.backgroundColor = "#777";
//     console.log(menuItem);
// });

console.log(Array.prototype); //виведе всі методи масивів
console.log(Array.prototype.slice.call(menuItems));
console.log([...menuItems]); //колекцію передає в масив

// const liSpan = [...document.querySelectorAll('.menu a > span')];
// console.log(liSpan);
console.log(nav.parentElement);
console.log(nav.closest('html'));

console.log(nav.firstChild);
console.log(nav.firstElementChild);

console.log(nav.lastChild);
console.log(nav.lastElementChild);

console.log(menu.previousElementSibling);
console.log(menu.nextElementSibling);

function foo(element) {
    console.log(element);
    const nextElement = element.nextElementSibling;
    if (nextElement && confirm('next?')) {
        foo(nextElement);
    } else {
        console.log('the end');
    }
}

// foo(menuItems[0]);

// menu.innerHTML = '';

console.log(menu.innerHTML);
console.log(menu.outerHTML);

// console.log(menuItems[0].innerText);
// console.log(menuItems[0].outerText) = 'jhgjhgj';

console.log(menuItems[0].querySelector('a > span').textContent = 'dshjfghg');

nav.setAttribute('title', 'test');
console.log(nav.getAttribute('title'));
console.log(nav.removeAttribute('title'));
console.log(nav.hasAttribute('title'));

nav.dataset.ddfgdfgdf = 6;
console.log(nav.dataset.navTest, nav.dataset);

console.dir(menu.classList.add('ddddd', 'sdfh', 'sdfkjhjdhf'));
console.dir(menu.classList.remove('ddddd'));
console.dir(menu.classList.contains('menu'));
console.dir(menu.classList.toggle('menu', true));
// console.dir(menu.classList.toggle('menu'));

// console.log(document.body.style.backgroundColor = '#999');
// console.log(document.body.style['background-color'] = '#999');

// console.log(window.getComputedStyle(document.body).flexDirection);
// console.log(window.getComputedStyle(document.body).display);
// nav.style.display = 'none';
// nav.style.display = 'block';
// nav.style.display = '';


const link = document.createElement('a');
link.setAttribute('href', '#');
link.classList.add('link');
link.textContent = 'link';

console.log(link);

nav.append(link);

nav.prepend(link);

nav.before(link);

nav.after(link);

// nav.replaceWith(link);

link.remove();

// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)

// document.body(<li>$('hgfghf')</li>);


//tag {String}
//atributtes {Object}
//class 'khg jkkjh kjhkjh kjhkjh' {String}
//content: if text - {String} | if a tag - {Node} | if many tags [{Node}, {Node}]
function createElement(tagName, props = {}, content) {
    if (!tagName) return;

    const element = document.createElement(tagName);

    let className = '';

    if (props && props.className) {
        className = props.className;
        delete props.className;

    }

    if (props) {
        addAttr(element, props);
    }

    if (className) {
        addClass(element, className);
    }

    if (content) {
        addContent(element, content);
    }

    return element;
}

function addContent(element, content) {
    if (!element || !content) return;

    if (typeof content === 'string') {
        element.textContent = content;
        return;
    }

    if (isNodeElem(content)) {
        element.append(content);
        return;
    }

    if (Array.isArray(content)) {
        content.forEach((elem) => {
            if (isNodeElem(elem)) {
                // element.append(elem);
                addContent(element, elem);
            }
        });
    }

    console.log(content);
}

function isNodeElem(elem) {
    return typeof elem === 'object' && elem.nodeType === 1;
}

function addClass(element, classes) {
    if (!element || !classes) return;

    const classList = classes.split(' ');
    console.log(classList);

    // element.classList.add(...classList);
    classList.forEach(className => {
        element.classList.add(className);
    })
}

function addAttr(element, option) {
    if (!element || !option) return;

    for (const key in option) {
        element.setAttribute(key, option[key]);
    }

}

document.body.prepend(
    createElement(
        'header',
        {
            className: 'header',
        },
        [
            createElement(
                'a',
                { hreaf: '#' },
                'logo'
            ),
            createElement(
                'button',
                { type: 'button' },
                'Sign Up'
            )
        ]));


// document.body.prepend(createElement('h1', {
//     title: 'Hello',
//     className: 'main-title test add',
// }, [createElement('span', null, 'Hello'), createElement('span', null, 'Hello')]));

