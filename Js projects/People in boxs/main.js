let data = [
    {
        name: 'Leonid',
        age: '15'
    },
    {
        name: 'Mark',
        age:  '14'
    },
    {
        name: 'Michael',
        age: '26'
    },
    {
        name: 'Dad',
        age: '50'
    },
    {
        name: 'Mom',
        age: '49'
    },
    {
        name: 'Grandma',
        age: '84'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
});

info.innerHTML = details.join('\n');
