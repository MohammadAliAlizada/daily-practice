function simpleArraySum(ar) {
    let y = 0;
    for(const x of ar){
        y = y+x
    }
    return y;
}

const result = simpleArraySum([32,5, 5])
console.log(`sum of these array = `,result)