// Polyfill for map

Array.prototype.mapPolyfill = function(callback){
    const emptyArr = [];
    for(let i=0;i<this.length;i++){
        emptyArr.push(callback(this[i],i,this))
    }
    return emptyArr
};

const array = [1,3,4,3]

const mappedArr = array.mapPolyfill((val, i , array) => {
    return val+i+array[i]
})


// Polyfill for filter

Array.prototype.filterPolyfill = function(callback){
    const emptyArr = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this) === true)
        {
            emptyArr.push(this[i])

        }
    }
    return emptyArr
};


const filteredArr = array.filterPolyfill((val,i,array) => {return (val+i+array[i]) > 2})


// Polyfill for Reduce
Array.prototype.reducePolyfill = function(callback,initialValue){
    if(this.length < 1)
       return initialValue;
    let start = 0;
    if(initialValue === undefined){
        initialValue = this[0]
        start = 1;
    }

    for(let i=start; i<this.length; i++){
        initialValue = callback(initialValue,this[i],i,this)
    }
    return initialValue
}

const reducedArr = array.reducePolyfill((acc,val,i,array) => {return (acc+val+i+array[i])},3)