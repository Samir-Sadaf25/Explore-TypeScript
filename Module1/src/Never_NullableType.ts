// nullable types 

const searchName = (value:string | null) =>{
    if (value)
        console.log("searching");
    else
        console.log("there is nothing to search");

}

// searchName(null);

const getSpeedMeterPerSecond = (value: unknown) =>{
    if(typeof value === 'number')
    {
        const convertedSpeed = (value*100)/3600;
        console.log(`the spped is ${convertedSpeed}`);
    }
    else if (typeof value === 'string') {
        const [result,unit] = value.split(" ");
         const convertedSpeed = (parseFloat((value))*1000)/3600;
        console.log(`the spped is ${convertedSpeed} ms^1`);
    }
}
// getSpeedMeterPerSecond("100 ");

const throwError = (msg:string):never =>{
   throw new Error(msg);
};

throwError("error hoia gese");