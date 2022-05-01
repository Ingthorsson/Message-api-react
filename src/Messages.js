import React, { useContext } from "react";
import Message from "./Message";
import { CartContext } from "./CartContext";

function Messages() {

    const { messages } = useContext(CartContext);

    return (
        <>
            {messages.map((message) => {
                return <Message key={message.email} {...message} />;
            })}
        </>
    );
}

export default Messages;