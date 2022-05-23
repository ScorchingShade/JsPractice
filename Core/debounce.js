// Create a debounce function
// Adapted from: http://davidwalsh.name/javascript-debounce-function
// A debounce function is a function that prevents multiple calls of a function in a specified period of time.





const debounce= ( fn, timeout=300)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(this,args)
        }, timeout)
    }
}

const saveName =(name='')=>{
    console.log("SavedName ", name)
}

const processName = debounce(saveName,2000);

processName('Ank');
processName('MAnk');