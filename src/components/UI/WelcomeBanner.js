import Styles from './WelcomeBanner.module.css';

const WelcomeBanner = (props) => {
    return(
        <div className={Styles.wrapper}>
            <div className={Styles.welcomeBox}>
                <h1>Order some delicious food from us</h1>
                <p>Choose your favorite meal from our exciting range of available meals and enjoy a restuarant quality meal at home</p>
                <p>All our meals are tried and tested and cooked up by our top chiefs from scratch</p>
            </div>
        </div>
    )

}

export default WelcomeBanner;