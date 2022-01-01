import React from 'react';

const Modal = ({children}) => {
    return (
        <div className='modal'>
            <div className="modal-card">
                {children}
            </div>   
        </div>
    );
};

export default Modal;