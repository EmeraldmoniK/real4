
function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min)+ min)  
}

let minNum = +prompt('Minimum');
let maxNum = +prompt('Maximum');
let col = +prompt('How many tasks do u want?')

for(let i = 0; i < col; i++){
    let one = rand(minNum, maxNum)
    let two = rand(minNum, maxNum)
    let three = rand(minNum, maxNum)

    if(one < two && three < two){
        let primer = +prompt(one + ' + ' + two + ' + ' + three + ' = ')
        let word = primer == (one + two + three)? ' Good ' : ' Bad '
        alert(one + ' + ' + two + ' + ' +  three +  ' = ' +(one + two + three) + ' Your answer ' + primer + ' , ' + word)

    }else if(one == two && one != three && two != three || one == two == three){
        let primer = +prompt(one + ' * ' + two + ' * ' + three + ' = ')
        let word = primer == (one * two * three)? ' Good ' : ' Bad '
        alert(one + ' * ' + two + ' * ' + three + ' = ' +(one * two * three) + ' Your answer ' + primer + ' , ' + word)

    }else if(one > two && three > two){
        let primer = +prompt(one + ' - ' + two + ' - ' + three + ' = ')
        let word = primer == (one - two - three)? ' Good ' : ' Bad '
        alert(one + ' - ' + two + ' - ' + three + ' = ' +(one - two - three) + ' Your answer ' + primer + ' , ' + word)

    }else{
        let primer = +prompt(one + ' / ' + two + ' / ' + three + ' = ')
        let word = primer == (one / two / three)? ' Good ' : ' Bad '
        alert(one + ' / ' + two + ' / ' + three + ' = ' +(one / two / three) + ' Your answer ' + primer + ' , ' + word)
        
    }
}