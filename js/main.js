// const menu = {
//     burger : [
//         {
//             name: '🍔',
//             time: 3000
//         },
//         {
//             name: '🍟',
//             time: 750
//         },
//         {
//             name: '🥤',
//             time: 500
//         }
//     ],
//     hotDog : [
//         {
//             name: '🌭',
//             time: 2000
//         },
//         {
//             name: '🍺',
//             time: 500
//         }
//     ],
//     pizza : [
//         {
//             name: '🍕',
//             time: 2500
//         },
//         {
//             name: '🥃',
//             time: 250
//         }
//     ]
// };

const menu = {
    tako: [
        {
            name: '🌮',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        },
    ],
    pizza: [
        {
            name: '🍕',
            time: 3500
        },
        {
            name: '🍟',
            time: 2850
        },
        {
            name: '🥤',
            time: 500
        },
    ],
    meat: [
        {
            name: '🍖',
            time: 3000
        },
        {
            name: '🍗',
            time: 2850
        },
    ]
}


const order = (nameMenu) => {
    const cooking = ({name, time}) =>
        new Promise((resolve, reject) => {
        const condition = +Math.random().toFixed();
        setTimeout(() => {
            condition ? resolve(name) : reject(name);
        }, time);
});
return Promise.allSettled(nameMenu.map(cooking));
};
order(menu.tako).then((result) => console.log(result));

const first = order(menu.tako);
const second = order(menu.pizza);
const third = order(menu.meat);
const fourth = order(menu.pizza);

