import Styles from '../order/CheckOut.module.css';
import useInput from '../hooks/useInput';

const isNameValidFn = (name) => {
    return name.trim().length > 0;
}

const isStreetValidFn = (name) => {
    return name.trim().length > 0;
}

const isPostCodeValidFn = (postcode) => {
    const regex_exp = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/g;
    return postcode.match(regex_exp);
}

const isCityValidFn = (city) => {
    return city.trim().length > 0 && (city.charAt(0) === city.charAt(0).toUpperCase());
}

const CheckOut = (props) => {

    const {
        value: nameValue,
        handleInput: handleNameInput,
        handleTouched: handleNameBlur,
        reset: resetName,
        isValid: isNameValid,
        isError: hasNameError
    } = useInput(isNameValidFn);

    const {
        value: streetValue,
        handleInput: handleStreetInput,
        handleTouched: handleStreetBlur,
        reset: resetStreet,
        isValid: isStreetValid,
        isError: hasStreetError
    } = useInput(isStreetValidFn);

    const {
        value: postCodeValue,
        handleInput: handlePostCodeInput,
        handleTouched: handlePostCodeBlur,
        reset: resetPostCode,
        isValid: isPostCodeValid,
        isError: hasPostCodeError
    } = useInput(isPostCodeValidFn);

    const {
        value: cityValue,
        handleInput: handleCityInput,
        handleTouched: handleCityBlur,
        reset: resetCity,
        isValid: isCityValid,
        isError: hasCityError
    } = useInput(isCityValidFn);

    //is the form as a whole valid
    const validForm = isNameValid && isPostCodeValid && isStreetValid && isCityValid;

    const cancelHandler = (event) => {
        event.preventDefault();
        props.toggleCheckOut(event);
    }

    const orderHandler = (event) => {
        event.preventDefault();
        //check that the form is valid
        if (!validForm){
            console.log('Issue with form');
            return;
        }

        console.log('form is good');

        //here i want to send the customer info to the cart which will add the 
        //meals and then send it to firebase
        const customerInfo = {
            name: nameValue,
            street: streetValue,
            city: cityValue,
            postcode: postCodeValue
        }

        console.log('Customer Info: ', customerInfo);
        props.sendOrder(customerInfo);

        //reset the form
        resetName();
        resetStreet();
        resetPostCode();
        resetCity();

        //The Cart will have to be cleared 

        //The Order will have to be posted to the backend
    }

    console.log(props);

    return(
        <form>
            <div className={hasNameError?Styles.errorInput:''}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value ={nameValue} onChange={handleNameInput} onBlur={handleNameBlur}></input>
                {hasNameError?<p>Please enter name</p>:''}
            </div>
            <div className={hasStreetError?Styles.errorInput:''}> 
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' value={streetValue} onChange={handleStreetInput} onBlur={handleStreetBlur}></input>
                {hasStreetError?<p>Please enter your street name</p>:''}
            </div>
            <div className={hasPostCodeError?Styles.errorInput:''}>
                <label htmlFor='postcode'>Post Code</label>
                <input type='text' id='postcode' value={postCodeValue} onChange={handlePostCodeInput} onBlur={handlePostCodeBlur}></input>
                {hasPostCodeError?<p>Please enter a valid Postcode</p>:''}
            </div>
            <div className={hasCityError?Styles.errorInput:''}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' value={cityValue} onBlur={handleCityBlur} onChange={handleCityInput}></input>
                {hasCityError?<p>Please enter a valid City (Upper case first letter)</p>:''}
            </div>
            <div className={Styles.containerButtons}>
                <button onClick={cancelHandler}>Cancel</button>
                <button disabled={!validForm} onClick={orderHandler}>Confirm</button>
            </div>
        </form>
    )
}

export default CheckOut;