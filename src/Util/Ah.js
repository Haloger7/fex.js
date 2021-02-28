module.exports = (Abs, Max)=> {
if(Abs > Max) throw new SyntaxError('Enter the correct absolute and maximum humidity!');
if(!Abs) throw new SyntaxError('Please indicate the absolute humidity!')
    if(!Max) throw new SyntaxError('Please indicate the maximum humidity!')
        if(typeof(Abs) != "number") throw new SyntaxError('Please enter the correct absolute humidity!')
            if(typeof(Max) != "number") throw new SyntaxError('Please enter the correct maximum humidity!')
    return (Abs/Max) * 100 + '%'
}