// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters (input) {
    return input.length > 0
    ? input.split(' ').map( i => i[0].toUpperCase() + i.slice(1)).join(' ')
    : '';
}
module.exports = capitalizeFirstLetters;