import React from 'react';
import _ from 'lodash';

function Lodash() {

    const array = ["Apple","Mango","Banana","Grapes","Papaya"];
    const nums = [1,2,3,4,5,6,7,8,9,10];

    const first = _.first(array);
    const last = _.last(array);
    const greeting = _.join(array, " ");
    const nth_3 = _.nth(nums, 3);
    const nth_minus_3 = _.nth(nums, -3);
    const chunk = _.chunk(nums, 2);
    const slice = _.slice(nums, 2, 6);
    const random = _.random(0,10); // 0 to 10
    const sample = _.sample(array);
    const shuffle = _.shuffle(array);


    // _.times
    let ankur = () => {
        console.log("brave");
    }
    // _.times



    // _.delay(message, 150);
    function message(){
        console.log("Some message");
    }

    _.delay(message, 2000);
    console.log("Some other message");
    // _.delay(message, 150);


    // _.isNumber, _.isString, _.isArray, _.isObject
    let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

    vals.forEach( (e) => {

        if (_.isNumber(e)) {
            console.log(`${e} is a number`);
        }

        if (_.isString(e)) {
            console.log(JSON.stringify(e) + ' is a string');
        }

        if (_.isArray(e)) {
            console.log(JSON.stringify(e) + ' is an array');
        }

        if (_.isObject(e)) {
            console.log(JSON.stringify(e) + ' is an object');
        }

    });
    // _.isNumber, _.isString, _.isArray, _.isObject


    // _.range
    let vals1 = _.range(10);
    let vals2 = _.range(0, 15);
    let vals3 = _.range(0, 15, 5);
    console.log(vals1);
    console.log(vals2);
    console.log(vals3);
    // _.range


    //min and max
    let min = _.min(nums);
    let max = _.max(nums);
    console.log(min);
    console.log(max);
    // min and max


    //_.sum
    let numbers = [-2, 0, 3, 7, -5, 1, 2];

    let sum = _.sum(numbers);
    console.log(sum);
    //_.sum


    //_.curry
    function multiply(a, b, c) {
        return a * b * c;
    }
    
    let curried = _.curry(multiply);
    
    let ret = curried(2)(3)(4);
    console.log("Curried " + ret);
    //_.curry

    
    //_.filter
    let nums1 = [4, -5, 3, 2, -1, 7, -6, 8, 9];
    let pos_nums = _.filter(nums1, (e) => e > 0);
    console.log(pos_nums);
    //_.filter
    
    
    
    //_.find   _.findLast
    let users = [
        { name: 'John', age: 25 },
        { name: 'Lenny', age: 51 },
        { name: 'Andrew', age: 43 },
        { name: 'Peter', age: 81 },
        { name: 'Anna', age: 43 },
        { name: 'Albert', age: 76 },
        { name: 'Adam', age: 47 },
        { name: 'Robert', age: 72 }
    ];
    
    let u1 = _.find(users, {name: 'Adam'});
    console.log(u1);
    
    let u2 = _.find(users, (u) => { return u.age > 60 });
    console.log(u2);
    
    let u3 = _.findLast(users, (u) => { return u.age > 60 });
    console.log(u3);
    //_.find   _.findLast
    
    
    
    //_.pull
    let numPull = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];
    _.pull(numPull, 1, 2);
    console.log(numPull);
    //_.pull
    
    
    //_.take
    let take = [1, 2, 3, 4, 5, 6]

    let take2 = _.take(take);
    let take3 = _.take(take, 2);
    let take4 = _.takeRight(take, 3)

    console.log(take2);
    console.log(take3);
    console.log(take4);
    //_.take
    
    
    
    //_.takeWhile
    let takeWhile = [1, -2, 3, 4, -5, 6, 7, -8, -9]

    let takeWhile2 = _.takeWhile(takeWhile, (n) => { return n < 0 });
    let takeWhile3 = _.takeRightWhile(takeWhile, (n) => { return n < 0 });

    console.log(takeWhile2);
    console.log(takeWhile3);
    //_.takeWhile
    


    //_.partition
    let partition = [4, -5, 3, 2, -1, 7, -6, 8, 9];
    let [partition2, partition3] = _.partition(partition, (e) => e < 0);

    console.log(partition2);
    console.log(partition3);
    //_.partition



    //_.reduce
    let reduce = [4, 5, 3, 2, 1, 7, 6, 8, 9];

    let sumreduce = _.reduce(nums, (total, next) => { return total + next });
    console.log(sumreduce);

    let colours = ["red", "green", "white", "blue", "black"];

    let res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
    console.log(res);
    //_.reduce


    //  string cases
    let words = ["sky", "Sun", "Blue Island"];

    console.log(_.map(words, _.camelCase));
    console.log(_.map(words, _.capitalize));
    console.log(_.map(words, _.kebabCase));
    console.log(_.map(words, _.lowerCase));
    console.log(_.map(words, _.upperCase));
    //  string cases



    // Lodash string _.startsWith and _.endsWith
    let words2 = ["tank", "boy", "tourist", "ten",
        "pen", "car", "marble", "sonnet", "pleasant",
        "ink", "atom"]

    console.log("Starting with 't'");
    words2.forEach( e => {

        if (_.startsWith(e, 't')) {

            console.log(e);
        }
    });

    console.log("Ending with 'k'");
    words2.forEach( e => {

        if (_.endsWith(e, 'k')) {

            console.log(e);
        }
    });
    // Lodash string _.startsWith and _.endsWith





    // Lodash string padding
    let nums3 = [657, 122, 3245, 345, 99, 18];

    nums3.forEach( e => {
        console.log(_.padStart(e.toString(), 20, '.'));
    });
    // Lodash string padding




    // Lodash string trim
    let word3 = '\tfalcon\t';

    let trimmed = _.trim(word3);
    console.log(trimmed + 'owl');
    
    let trimmed2 = _.trimStart(word3);
    console.log(trimmed2 + 'owl');
    
    let trimmed3 = _.trimEnd(word3);
    console.log(trimmed3 + 'owl');
    // Lodash string trim





    // Lodash object keys and values
    let p = {age: 24, name: "Rebecca", occupation: "teacher"};

    let keys = _.keys(p);
    console.log(keys);

    let values = _.values(p);
    console.log(values);
    // Lodash object keys and values



    // Lodash object picking
    console.log(_.pick({ name: 'John', age: 25 }, 'name'));
    console.log(_.pick({ name: 'John', age: 25 }, 'age'));
    // Lodash object picking




    // Lodash object at
    let users3 = [
        { id: 1, name: 'John', about: { 'age': 25, 'colours': ['red', 'green'], } },
        { id: 2, name: 'Lenny', about: { 'age': 51, 'colours': ['blue'], } },
        { id: 3, name: 'Andy', about: { 'age': 43, 'colours': ['orange', 'steelblue'], } },
        { id: 4, name: 'Peter', about: { 'age': 52, 'colours': ['black'], } },
        { id: 5, name: 'Anna', about: { 'age': 43, 'colours': ['purple'], } },
    ];

    let name = _.at(users3[2], 'name');
    console.log(name);
    
    let colour = _.at(users3[0], 'about.colours[0]');
    console.log(colour);
    // Lodash object at



    //Lodash object get and set
    let data = { user: { name: "John Doe", age: 34, occupation: "gardener"} };
    
    _.set(data, "user.age", 36);
    console.log(data);

    console.log(_.get(data, "user.name", "unknown"));
    console.log(_.get(data, "user.marital_status", "unknown"));
    // Lodash object get and set



    //Lodash iterate object properties
    let p2 = {age: 24, name: "Rebecca", occupation: "teacher"};

    _.forIn(p2, (value, key) => {
        console.log(`${key}: ${value}`);
    })
    //Lodash iterate object properties
    
    return (
        <>
            _.first = {first}<br />
            _.last = {last}<br />
            _.join = {greeting}<br />
            _.nth = {nth_3}<br />
            _.nth = {nth_minus_3}<br />
            _.chunk = see in console window{console.log(chunk)}<br />
            _.slice = {slice}<br />
            _.random = {random}<br />
            _.sample = {sample}<br />
            _.shuffle = {shuffle}<br />
            _.times(4, ankur) = {_.times(4, ankur)}See output in console <br />
            _.delay(message, 2000); see output in console<br />

        </>
    )
}

export default Lodash;