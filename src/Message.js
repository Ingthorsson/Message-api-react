import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Message({ messageId, name, email, message }) {

    const {deleteMessage} = useContext(CartContext);

    return (
        <>
            <div className="msg-card">
                <div className="field-item name-label">Name:</div>
                <div className="field-item email-label">Email:</div>
                <div className="field-item name-field">{name}</div>
                <div className="field-item email-field">{email}</div>
                <div className="field-item msg-field">{message}</div>
                <button className="field-item delete-field" onClick={() => deleteMessage(messageId)}>X</button>
            </div>
        </>
    );
}

export default Message;