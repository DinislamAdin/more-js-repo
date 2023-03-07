const getData = new Promise((resolve, reject) => {

    const num = Math.random()*10;
    console.log(num);
    if(num > 5){
    resolve(55665)
    }else{
        reject('no data avlavele')
    }
})

// console.log(getData);
getData
        .then(data => console.log(data +20))
        .catch(err => console.error('ERR:',err))