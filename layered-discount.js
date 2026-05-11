/**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70
 */

function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantityTotal = (quantity - 100) * second100Price;
        const total = first100Total + remainingQuantityTotal;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantityTotal = (quantity - 200) * above200Price;
        const total = first100Total + second100Price + remainingQuantityTotal;
        return total;
    }
}