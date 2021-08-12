// 1. Callback
const funcB = (cb) => {
    console.log('Start function')
    cb()
}


const funcC = () =>{
    console.log(' in callback ')
}   

funcB(funcC)

const funcProm = (b) => {
    return new Promise((resolve,reject) => {
        if(b==='s'){
        resolve("Promise resolved")
    }else{
        reject("Error - Rejected ")
    }
    })
    // console.log('Start function')
    // cb()
}


funcProm(2).then((res) => console.log('result',res))
.catch((error) => console.log('got err: ',error))
