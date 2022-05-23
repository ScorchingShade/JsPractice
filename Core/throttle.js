// implement a throttle function.
// A throttle function is a function which will get executed immediately
// Any other function calls after it only occur after a certain period of time


const throttle = (fn, timeout = 300) => {
    let hasLoaded = false;
    return (...args) => {
        if (!hasLoaded) {
            fn.apply(this, args)
            hasLoaded = true
            setTimeout(() => {
                hasloaded = false;
            }, timeout)
        }

    }
}

const saveName = (name = '') => {
    console.log("SavedName ", name)
}

const processName = throttle(saveName, 2000);
processName('Ank');

setTimeout(() => {
    processName('mAnk');
}, 1000)


setTimeout(() => {
    processName('TmAnk');
}, 1200)

setTimeout(() => {
    processName('Ank');
}, 2400)
