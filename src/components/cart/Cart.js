import Modal from '../UI/Modal';
import Styles from '../cart/Cart.module.css';

const Cart = (props) => {
    return(
        <Modal hideModal={props.hideCart}>
            <div className={Styles.container}>
            <h1>From S=Cart</h1>
            </div>    
        </Modal>
    )
}

export default Cart;