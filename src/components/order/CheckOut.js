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
        </form>
    )
}

export default CheckOut;