"use strict";
exports.__esModule = true;
;
var hpDevice = {
    brandName: 'HP',
    cost: 2000,
    ramSize: 16
};
var dellDevice = {
    brandName: 'HP',
    cost: 3000,
    ramSize: 8
};
var arr = [hpDevice, dellDevice];
var appleDevice = {
    brandName: 'Apple',
    cost: 3500,
    ramSize: 8
};
arr.push(appleDevice);
console.log(arr);
doThis(arr);
function doThis(arr2) {
    console.log('inside doThis---');
    arr2.forEach(function (device) {
        console.log(device);
        if (device.brandName == 'Apple') {
            console.log(device);
        }
    });
}
