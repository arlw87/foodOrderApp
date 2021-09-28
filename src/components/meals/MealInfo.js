import Style from './MealInfo.module.css';

const MealInfo = (props) => {

    const {mealName, mealDesc, price} = props.mealDetails;

    return(
        <div className={Style.mealInfo}> 
            <h2>{mealName}</h2>
            <p>{mealDesc}</p>
            <span>£{price}</span>
        </div>

    )
}

export default MealInfo;