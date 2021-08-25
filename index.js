// Code your solutions in this file

const names = ['Lad', 'Yemisi', 'Jemma', 'Sophie', 'Ade']

function writeCards(names, event){
   const message = []
    for (let i = 0; i < names.length; i++){ 
        message[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        debugger;
    }
    return message;
}

writeCards (names,'wedding');


function countDown(num){
    while (num >= 0){
        console.log(num)
        num--
    }
}

countDown (10)

