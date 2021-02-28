module.exports = (Celsius) => {
    if(!Celsius) throw new RangeError('Indicate degrees Fahrenheit!')
    if(typeof(Celsius) != 'number') throw new TypeError('Enter the correct number of degrees Fahrenheit!')
    return (Celsius * 1.8) + 32;
}