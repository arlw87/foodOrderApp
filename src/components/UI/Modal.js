import { Fragment } from 'react';
import backdropStyles from './Backdrop.module.css';
import ReactDom from 'react-dom';

const Backdrop = (props) => {

    const exitModalBackhandler = (event) => {
        props.hideBackdrop();
    }

    return(
        <div className={backdropStyles.container} onClick={exitModalBackhandler}>
            {props.children}
        </div>
    )
}

const ModalOverlay = (props) => {
    return(
        <div className={backdropStyles.modalOverlay}>
            {props.children}
        </div>

    )
}

const Modal = (props) => {

    const overlayElement = document.getElementById('backdrop-root');

    return(
        <Fragment>
            {ReactDom.createPortal(
            <Backdrop hideBackdrop={props.hideModal}/>,
            overlayElement
            )}
            {ReactDom.createPortal(
            <ModalOverlay>
                {props.children}
            </ModalOverlay>,
            overlayElement
        )}
        </Fragment>
    )
}

export default  Modal;