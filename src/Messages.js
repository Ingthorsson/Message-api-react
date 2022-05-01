import React, { useContext } from "react";
import Message from "./Message";
import { MessageContext } from "./MessageContext";

function Messages() {

    const { messages } = useContext(MessageContext);

    return (
        <>
            {messages.map((message) => {
                return <Message key={message.email} {...message} />;
            })}
        </>
    );
}

export default Messages;