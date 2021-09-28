const MealInfo = (props) => {

    const {mealName, mealDesc, price} = props.mealDetails;

    return(
        <div>
            <h2>{mealName}</h2>
            <p>{mealDesc}</p>
            <p>{price}</p>
        </div>

    )
}

export default MealInfo;