{
    const kgToGram = (value: string | number) : string | number | undefined => {
        if (typeof value === 'number') {
            return value * 1000;
        }
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `converted value ${convertedValue}`;
        }
    }

  const result = kgToGram(10);

  type CustomError = {
     message: string;
  }

  try {
    
  } catch (error) {
    console.log((error as CustomError).message);
  }



}