import Popup from '../Popup/Popup';

function PopupWithInfo({name, isOpen, onClose, ...props}) {

    // console.log(props);

    return(
        <Popup isOpen={isOpen} name={name} onClose={onClose}>
            <div className='popup__info'>
                {props.children}
            </div>
        </Popup>
        
    )
}

export default PopupWithInfo;