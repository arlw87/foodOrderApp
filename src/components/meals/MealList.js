import Styles from './Meallist.module.css';
import Meal from './Meal';
import MealForm from './MealForm';
import { Fragment } from 'react/cjs/react.production.min';

const MealList = (props) => {

    const mealArray = [
        {
            mealName: 'Sushi',
            mealDesc: 'Great Tasting Fish and Vegetables',
            price: 15.99,
            key: 1
        }, 
        {
            mealName: 'Barbecue Ribs',
            mealDesc: 'Tender Ribs marinated in BBQ sauce',
            price: 25.99,
            key: 2
        },
        {
            mealName: 'Pizza',
            mealDesc: 'Vegeterian Pizza',
            price: 12.99,
            key: 3
        }, 
        {
            mealName: 'Salad',
            mealDesc: 'A great mix of fresh vegetables and dressing',
            price: 9.99,
            key: 4
        }
    ]

    return(
        <ul className={Styles.listContainer}>
            {mealArray.map(el => {
                return(
                        <Fragment>
                            <Meal mealDetails={el} key={el.key}></Meal>
                            <hr/>
                        </Fragment>
                )
            })}
        </ul>    
    )
}

export default MealList;