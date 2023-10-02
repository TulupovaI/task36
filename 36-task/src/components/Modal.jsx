import React from "react";
import "./Modal.css";

function Modal({ show, onClose, onConfirm }) {
    return (
        show && (
            <div className="modal">
                <div className="modal-content">
                    <p>Ви впевнені, що хочете видалити цей контакт?</p>
                    <button onClick={onConfirm}>Так</button>
                    <button onClick={onClose}>Ні</button>
                </div>
            </div>
        )
    );
}

export default Modal;