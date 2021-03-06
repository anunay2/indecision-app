
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
       <Modal isOpen={!!props.selectedOption}
       onRequestClose={ props.handleClearSelectedOption }
      closeTimeoutMS = {200}
       contentLabel="Selected option"
       className="modal">
           <h3 className="modal__title">Selected Option</h3>
       {props.selectedOption &&  <p className="modal__body"> {props.selectedOption}</p>}
       <button onClick={//(e) =>
        // props.handleDeleteOption(props.selectedOption) ||
        props.handleClearSelectedOption } className="button">
            OK,Boss</button>
       </Modal>
    )
};

export default OptionModal;
