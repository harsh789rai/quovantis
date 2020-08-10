function colors (colorsArr) {
    let obj = {};

    for (let i=0; i < colorsArr.length; i++) {
        if(obj[colorsArr[i]]) {
            obj[colorsArr[i]]++;
        } else {
            obj[colorsArr[i]] = 1;
        }  
    }

    let count = 0;
    let max = {};

    for (let key in obj) {
        if(obj[key] > count) {
            max = {};
            max[key] = obj[key];
        }
        count = obj[key];
    };
        return max;
    };

let colorsArr = ['red',
'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
'green', 'green', 'red', 'green', 'blue'];

let max = colors(colorsArr);
console.log(max)