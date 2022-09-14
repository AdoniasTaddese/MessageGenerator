
// a function that can generate random number 

const generate_random_num = (num) => {
    const number = num -1 
    random_num = Math.floor(Math.random() * number);
    return random_num;

}   

const message_generator = () => {

    const  message = {
        signInfo: ['star', 'moon', 'sun', 'comet'],
        fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
        advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
    }

    for ( let prop in message){
       
        if ( prop === 'signInfo'){
            console.log(`You are a ${message[prop][generate_random_num(message[prop].length)]}`)
        } else if ( prop === "fortuneOutput" ){
            console.log(`You have a ${message[prop][generate_random_num(message[prop].length)]}`)
        } else {
            console.log(`You will ${message[prop][generate_random_num(message[prop].length)]}`)
        }
    }
    
}

message_generator();
