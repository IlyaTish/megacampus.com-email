function flatten(array, result) {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (Array.isArray(value)) {
            flatten(value, result);
        } else {
            result.push(value);
        }
    }
}

module.exports = function (array) {
    const result = [];
    flatten(array, result);
    return result;
}
