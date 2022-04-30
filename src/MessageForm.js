import React, { useContext } from "react";
import { CartContext } from "./CartContext";


function MessageForm() {

    const { submitMessage } = useContext(CartContext);

    return (
        <>
            <form className="msgForm" onSubmit={submitMessage}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    onChange={onChangeName}
                    value={name} />

                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={onChangeEmail}
                    value={email} />

                <textarea
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Enter Message"
                    onChange={onChangeMessage}
                    value={message}
                    rows="10"></textarea>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default MessageForm;