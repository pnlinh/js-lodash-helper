const _ = require('lodash');

const numbers = [-100, 21, 1, 1, 2, 3, 5, 8, 13];

const isOdd = number => number % 2 !== 0;

// Use filter
const oddNumbers = _.filter(numbers, isOdd);
const evenNumbers = _.filter(numbers, _.negate(isOdd));

console.log({oddNumbers, evenNumbers});

// Use partition
const [odd, even] = _.partition(numbers, isOdd);
console.log({odd, even});

// Use zipObject
const headers = ['id', 'name', 'age'];
const rows = [
    ['1', 'pnlinh', 24],
    ['2', 'linhpn7', 24],
    ['3', 'tantv7', 24],
];

const users = rows.map(row => _.zipObject(headers, row));
console.log({users});

// Use matches
const todos = [
    {description: 'Learn Js', completed: true},
    {description: 'Learn ReactJs', completed: true},
    {description: 'Learn VueJs', completed: false},
    {description: 'Learn Laravel', completed: true},
];

// const notCompleteds = todos.filter(todo => !todo.completed);
const notCompleteds = todos.filter(_.matches({completed: false}));

console.log({notCompleteds});

// Use overSome, orverEvery
const profiles = [
    {id: 1, name: 'pnlinh', github: 'pnlinh'},
    {id: 2, name: 'linhpn7', github: 'pnlinh'},
    {id: 3, name: 'tantv7', github: 'tantv7'},
    {id: 4, name: 'vunv20', github: 'vunv20_pro'},
];

const hasShortName = user => user.name.length <= 4;
const hasLodashInHandle = user => (/_/).test(user.github);

const andCondition = _.overEvery([hasShortName, hasLodashInHandle]);
const orCondition = _.overSome([hasShortName, hasLodashInHandle]);

console.log(profiles.filter(orCondition));
console.log(profiles.filter(andCondition));

// Use keyBy
const indexByGithubUserName = _.keyBy(profiles, user => user.github);

console.log(indexByGithubUserName['pnlinh']);