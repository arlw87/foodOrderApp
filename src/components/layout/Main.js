import { Fragment } from "react";
import WelcomeBanner from "../UI/WelcomeBanner";
import MealList from '../meals/MealList';
import Styles from "./Main.module.css"

const Main = (props) => {
    return(
        <Fragment>
            <WelcomeBanner/>
            <MealList addToCart={props.addToCart}/>
        </Fragment>
    )
}


export default Main;