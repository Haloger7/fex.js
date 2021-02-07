module.exports = (abs, max) => { 
if(abs > max) return console.error('Enter the correct absolute and maximum humidity.'); 
else (abs/max) * 100 + '%'
}
