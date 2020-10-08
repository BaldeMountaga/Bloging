// Return false if all fields are present in a form. 
const emptyField = (array) => {
    let isEmpty = false;
    for (let i of array) {
        if (array[i] === null){
            isEmpty = true;
        }
    }
    return isEmpty;
}


module.exports = {
    emptyField
}