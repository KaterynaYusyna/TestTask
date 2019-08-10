randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));

let mapArray = new Array();
mapArray.push(randomArray(5, 20));
mapArray.push(randomArray(5, 20));
mapArray.push(randomArray(5, 20));
mapArray.push(randomArray(5, 20));
mapArray.push(randomArray(5, 20));

let json = JSON.stringify(mapArray);
console.log(json);