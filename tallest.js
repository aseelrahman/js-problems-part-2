const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    console.log(numbers);
    let tallest = numbers[0];
    for(const num of numbers){
        console.log(num);
        if(num > tallest){
            tallest = num;
        }
    }
    return tallest;
}

const max = getMax(heights);
console.log('max value is: ', max);
