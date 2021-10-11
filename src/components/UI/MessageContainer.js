import Styles from './MessageContainer.module.css';

const MessageContainer = (props) => {
    return(
        <div className={Styles.messageContainer}>
            {props.children}
    </div>
    )
}

export default MessageContainer;