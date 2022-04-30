import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages()
    }, []);

    // GET 10 MESSAGES
    function getMessages() {
        fetch('https://vdqae8kskf.execute-api.us-east-1.amazonaws.com/prod/message', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                setMessages(json.body)
            });
    };


    // DELETE MESSAGE
    function deleteMessage(messageId) {
        const response = fetch('https://vdqae8kskf.execute-api.us-east-1.amazonaws.com/prod/message', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "messageId": messageId
            })
        });
        response.then(result => {
            getMessages();
        });
    }

    return (
        <CartContext.Provider value={{ messages, getMessages, deleteMessage }}>
            {children}
        </CartContext.Provider>
    );
}
