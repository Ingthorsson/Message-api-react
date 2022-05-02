import React, { useContext, useState } from "react";
import { MessageContext } from "../MessageContext";


function MessageForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitMessage = async (e) => {
        e.preventDefault();
        const response = await fetch('https://vdqae8kskf.execute-api.us-east-1.amazonaws.com/prod/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "message": message
            })
        });
        const result = await response.json();
        if (result.statuscode === 201) {
            setName("");
            setEmail("");
            setMessage("");
            getMessages();
        }
    };

    const { getMessages } = useContext(MessageContext);

    return (
        <>
            <form className="msgForm" onSubmit={e => submitMessage(e)}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={onChangeName}
                    value={name} />

                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={onChangeEmail}
                    value={email} />

                <textarea
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