import { useState } from 'react';

const useInput = (isValidateFn) => {

    const [value, setValue] = useState('');
    const [isTouched, setTouched] = useState(false);

    //this function will be re-created everytime
    //the useInput hook is called
    const handleInput = (event) =>{
        setValue(event.target.value);
    } 

    const handleTouched = (event) => {
        setTouched(true);
    }

    const reset = () =>{
        setValue('');
        setTouched(false);
    }

    const isValid = isValidateFn(value);
    const isError = !isValid && isTouched;

    return {
        value,
        handleInput,
        handleTouched,
        reset,
        isValid,
        isError
    }

}

export default useInput;