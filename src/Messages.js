import React from "react";
import Message from "./Message";
import { CartContext } from "./CartContext";
import { useContext } from "react";

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