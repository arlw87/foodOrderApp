import Styles from './Meallist.module.css';
import Meal from './Meal';
import MealForm from './MealForm';
import { Fragment } from 'react/cjs/react.production.min';
import useFetch from '../hooks/useFetch';
import { useEffect, useState} from 'react/cjs/react.development';




//List of Meals to display that the customer can add to the cart

const MealList = (props) => {

    const [meals, setMeals] = useState([]);

    const firebaseUrl = 'https://foodorderapp-7e900-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

    const requestConfig = {
        url: firebaseUrl
    }

    const [isLoading, error, sendRequest] = useFetch(requestConfig);


    //only run this code if the sendRequest function changes
    //it is not set to do that at the moment as it only runs
    //on the mount (see the useFetch hook)
    useEffect(()=>{

        console.log('useEffect');

        const changeData = (data) => {
            let mealArray = [];
            if (data !== null){
                const keys = Object.keys(data);
                mealArray = keys.map((key) => {
                    return data[key];
                });
                setMeals(mealArray);
            }
        }

        sendRequest(requestConfig, changeData);

    },[sendRequest]);

    let content = 'Hello';

    if (error){
        content = <h1>{error}</h1>
    } else if (isLoading){
        content = <h1>loading...</h1>
    } else {
        content = ( 
        <ul className={Styles.listContainer}>
        {meals.map(el => {
            return(
                <Fragment>
                    <Meal mealDetails={el} key={el.key} addToCart={props.addToCart}></Meal>
                    <hr/>
                </Fragment>
                )
            })}
        </ul> )
    }

    return(
        <Fragment>
            {content}
        </Fragment>

    )
}

export default MealList;