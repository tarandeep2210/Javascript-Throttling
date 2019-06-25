let counter=0;
const getData = () => {
console.log(`fetchig data ${counter++}`);
};


const doSomeMagic = (fn,dl) => {
    let flag = true;
    return function(){
        let context = this,args=arguments;
    if(flag){
        fn.apply(context,args);
        flag = false;

            setTimeout(()=>{
                flag = true;
            },dl);
        };
    }
    
    
};

const betterFunction = doSomeMagic (getData,3000);