const mobiles = [
    { name: 'Samsung', price: 20000, camera: '12 mp', color:'black' },
    { name: 'Xoami', price: 18000, camera: '12 mp', color:'black' },
    { name: 'Oppo', price: 30000, camera: '12 mp', color:'black' },
    { name: 'iPhone', price: 100000, camera: '12 mp', color:'black' },
    { name: 'Walton', price: 31000, camera: '12 mp', color:'black' },
    { name: 'HTC', price: 27000, camera: '12 mp', color:'black' },

]

function getCHeapestPhone(phones){
    let cheap = phones[0].price;
    for(phone of phones){
        if(phone.price < cheap){
            cheap = phone.price;
        }
    }
    return cheap;
    
}

const cheap = getCHeapestPhone(mobiles);
console.log('CHeapest phone is: ', cheap);
