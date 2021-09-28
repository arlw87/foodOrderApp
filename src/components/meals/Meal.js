import MealInfo from "./MealInfo";
import Styles from './Meal.module.css';
import MealForm from "./MealForm";

const Meal = (props) => {
    return(
        <li className={Styles.mealContainer}>
            <MealInfo mealDetails={props.mealDetails}></MealInfo>
            <MealForm></MealForm>
        </li>
    )
}

export default Meal;