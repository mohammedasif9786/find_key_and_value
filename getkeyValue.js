function getKeysAndValues(obj) {
    let finalArr =[]

    const keys = Object.keys(obj).sort();

    
    const values = keys.map(key => obj[key]);

    return { keys, values };
}

// Example usage:
const myObject = {
   "user_1" : "Asif",
   "user_2" : "Sarfaraaz",
   "user_3" : "Sohael",
   "user_4" : "Asif",
};

const result = getKeysAndValues(myObject);