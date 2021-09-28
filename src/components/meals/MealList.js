import Styles from './Meallist.module.css';
import Meal from './Meal';
import MealForm from './MealForm';
import { Fragment } from 'react/cjs/react.production.min';

const MealList = (props) => {

    const mealArray = [
        {
            mealName: 'Pizza',
            mealDesc: 'Fun food',
            price: 45.99,
            key: 1
        }, 
        {
            mealName: 'Pizza',
            mealDesc: 'Fun food',
            price: 45.99,
            key: 2
        },
        {
            mealName: 'Pizza',
            mealDesc: 'Fun food',
            price: 45.99,
            key: 3
        }
    ]

    return(
        <ul className={Styles.listContainer}>
            {mealArray.map(el => {
                return(
                        <Meal mealDetails={el} key={el.key}></Meal>
                )
            })}
        </ul>    
    )
}

export default MealList;