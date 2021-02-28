module.exports = (Fahrenheit) => {
    if(!Fahrenheit) throw new RangeError('Indicate degrees Fahrenheit!')
    if(typeof(Fahrenheit) != 'number') throw new TypeError('Enter the correct number of degrees Fahrenheit!')
    return (Fahrenheit - 32) * 5 / 9;
}