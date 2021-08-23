function f1(num) {
    return function (arr) {
        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            arr2[i] = arr[i] / num;
        }
        return arr2;
    }
}


let closureMainFunc = f1(3);
console.log(closureMainFunc([9, 18, 27]));


