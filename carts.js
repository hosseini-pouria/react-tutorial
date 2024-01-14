import generateElement from './generateElement.js';

const container = generateElement('div', {
    class: 'container'
})

function generateCart(name, age) {
    return generateElement(
        'div',
        {class: 'cart'},
        generateElement('span', null, `name: ${name}`),
        generateElement('span', null, `age: ${age}`)
    );
}

const userData = [
    {name: 'pouria', age: 30},
    {name: 'milad', age: 30},
    {name: 'amir', age: 30}
]

userData.forEach(data => {
    container.appendChild(generateCart(data.name, data.age));
})

export default container;