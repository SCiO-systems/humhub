import humhub from './core';
import * as util from './util';

setInterval(() => {
    util.array.xxx();
}, 3000);

humhub.event.on('humhub:modules:util:afterInit', function(evt, util) {

    console.log('asdf');
    util.array.xxx = () =>  console.log('yes');

});

console.log('xxxxxxxx');

// an array of colors
let colors = ['red', 'green', 'blue'];

// a function to build a list
let makeTemplate = function (data) {
    let newList = '';
    data.forEach(function(element) {
        newList += `<li>${element}</li>`;
    });
    return newList;
};

// build a container template
let template = `<ul>
                ${makeTemplate(colors)}
                </ul>`;

console.log(template);

window.humhub = humhub;