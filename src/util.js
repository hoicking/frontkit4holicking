// 防抖  就是连续多次点击只出发一次

function debounce(fn){
    const time = 1000
    let delay

    return function(){
        const context = this
        const args = arguments

        if(delay){
            clearTimeout(delay)
        }

        delay = setTimeout(() => {
            fn.apply(context, args)
        }, time);
    }

}

//节流  就是每一段时间产生一次有效执行
function throttle(fn){
    const time = 1000

    let pastTime

    return ()=>{
        const args = arguments
        const context = this
        const now = new Date()
        if(!pastTime || now - pastTime > time){
            pastTime = now
            fn.apply(context, args)
        }
    }
}


//类型判断
function checkType(param){
    return Object.prototype.toString.call(param)
}


