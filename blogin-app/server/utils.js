// Return false if all fields are present in a form. 
const emptyField = (array) => {
    let isEmpty = false;
    for (let i of array) {
        if (array[i] === undefined){            // Changed null to undefined
            isEmpty = true;
        }
    }
    return isEmpty;
}


/**
 * Returns the Authentication token from a request made to an endpoint
 * @param {The Request object} request 
 */
const getAuthToken = request => {
    const auth = request.get("authorization");
    if (auth && auth.toLowerCase().startsWith('token')) {
        return auth.substring(6)
    }
    return null;
}


module.exports = {
    emptyField,
    getAuthToken
}