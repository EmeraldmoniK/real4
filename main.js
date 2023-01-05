let born = +prompt('When did u born?');
let now = +prompt('What year is it now?');
let nick = prompt('What is your name?');

function prof(born, now, nick){
    let age = now - born;
    alert('Your name is ' + nick + ' , ' + ' your age is  ' + age)
}

console.log(prof(born, now, nick));

