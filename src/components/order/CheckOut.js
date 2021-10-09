import Styles from '../order/CheckOut.module.css';

const CheckOut = (props) => {
    return(
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name'></input>
            </div>
            <div>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street'></input>
            </div>
            <div>
                <label htmlFor='postcode'>Post Code</label>
                <input type='text' id='postcode'></input>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' id='city'></input>
            </div>
        </form>
    )
}

export default CheckOut;