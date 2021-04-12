//实现 add(1)(2)(3) = 6
//add(1,2,3) = 6
//add(1,2)(3) = 6

function add(...param){
    let arr = param.slice()

    const adder = function(){

        arr.push(...arguments)
        console.log(arr)
        return adder
    }

    adder.toString = function(){

        return arr.reduce((x,y)=>{
            return x + y
        })
    }

    return adder
}

console.log(add(1,2,3,4).toString(), add(1,2,3).toString(), add(1)(2)(3).toString())

