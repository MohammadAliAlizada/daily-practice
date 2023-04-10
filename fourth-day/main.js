// closure in java script
//IIFE (Immediately Invoked Function Expression)
const credits = ((num) =>{
    let credits = num;
    console.log(`initial credits value: ${credits}`);

    //child function
    return ()=>{
        credits -=1;
        if(credits > 0) console.log(`playing game, ${credits} credits remaining`);
        if(credits <=0) console.log(`not enough credits`);
    }

})(3);
credits()
credits()
credits()

// when a function access to globale variable and parent variable and does not called is closure