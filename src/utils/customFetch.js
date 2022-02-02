const promise_is_ok = true;
const customFetch = ( time, data ) => {        
    return new Promise(( resolve, reject ) => {
        if ( promise_is_ok ) {                   
            setTimeout( () => { resolve( data ) }, time );
        } else {
           reject( console.log("error"))
        }
    })
};

export default customFetch;