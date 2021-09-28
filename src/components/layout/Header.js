import {Fragment} from "react";
import CartButton from "../UI/CartButton";
import Styles from './Header.module.css';
import mealImage from '../../assets/meals.jpg';

const Header = () => {
    return(
        <Fragment>
            <header className={Styles.header}>
                <h1 className={Styles.title}>React Meals</h1>
                <CartButton></CartButton>
            </header>
            <div className={Styles.imageContainer}>
                <img src={mealImage}></img>
            </div>    
        </Fragment>
    )
}

export default Header;