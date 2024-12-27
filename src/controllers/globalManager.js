let globalObj = {};

export default {
    init(){
        document.globalManager = this;
    },
    setItem(key, val) {
        globalObj[key] = val;
    },
    getItem(key) {
        if(Object.keys(globalObj).contains(key))
            return globalObj[key];
        else
            return null;
    },
    getAll(){
        return globalObj;
    },
    reset(){
        globalObj = {};
    }
}