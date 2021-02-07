module.exports = (abs: number, max: number) => { 
if(abs > max) throw new Error('Enter the correct absolute and maximum humidity.'); 
return (abs/max) * 100 + '%' 
}