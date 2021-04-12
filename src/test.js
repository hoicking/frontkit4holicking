// // function cssStyle2DomStyle(param) {
// //     let str  = param + ''
// //     for(let i =0; i<str.length; i++){
// //         if(str[i]=== '-' && i+1<str.length){
// //             console.log(str[i+1])
// //             str[i+1] = str[i+1].toLocaleUpperCase()
// //             str[i] = ''
// //         }
// //     }
// //     return str
// // }

// // console.log(cssStyle2DomStyle('font-size'))



class LazyMan{

    constructor(name){
        this.name = name
        this.status = 'free'
        this.callbacks = []
        this.sayHi()
    }

    sayHi(){
        console.log(`hi iam ${this.name}`)

        setTimeout( ()=>{
            // this.callbacks.forEach( async(element) => {
            //     await element()
            // });
            let p = new Promise((resolve)=>{
                setTimeout(() => {
                    resolve()
                }, 0);
            })
            for(let i =0; i< this.callbacks.length; i++){
                 p = p.then(()=>{
                    return this.callbacks[i]()
                })
            }            
        }, 0);
    }

    sleep(time){
        this.callbacks.push(()=>{

            return  new Promise((resolve, reject)=>{
                setTimeout(() => {
                    console.log(`等待了${time}秒`)
                    resolve()
                }, time*1000);
            })
            
        })
        return this
    }

    eat(food){
        this.callbacks.push(()=>{
            return new Promise((resolve, reject)=>{
                console.log(`i am eating ${food}`)
                resolve()
            })
        })

        return this
    }

    sleepFirst(time){

        this.callbacks.unshift(()=>{
            return new Promise((resolve, reject)=>{

                setTimeout(() => {
                    console.log(`sleep first`)
                    resolve()
                }, time * 1000);
                
            })
        })

        return this

    }

}

 new LazyMan('me').sleep(10).eat('lunch').sleepFirst(5)

// const p = new Promise((resolve, reject)=>{
//     resolve()
// })

// p.then(()=>{
//     return setTimeout(() => {
//         console.log(1)
//     }, 1000);
// }).then(()=>{
//     return  setTimeout(() => {
//         console.log(2)
//     }, 800);
// })