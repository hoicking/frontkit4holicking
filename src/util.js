// 防抖
function debounce(fn, time){
    let delay
    return function(){
        let context = this;
        let args = arguments;
        if(delay){
            clearTimeout(delay)
        }
        delay = setTimeout(() => {
            fn.apply(context, args)
        }, time);
    }
}

// 节流

function throttle(fn, time){
    let previous = 0
    return function(){
        let context = this;
        let args = arguments;
        const now = Date.now()
        if(now - previous > time){
            fn.apply(context, args)
            previous = now
        }
    }
}