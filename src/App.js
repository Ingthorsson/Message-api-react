import './App.css';
import { useState } from "react";
import Messages from "./Messages";
import { CartProvider } from "./CartContext";


function App() {

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
    }
  };


  return (

    <div className="container">
      <div className="main">
        <h1 className="page-title">Messages</h1>
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

        <section className="msg-container">
          <h2 className="msg-title">Messages from DynamoDB</h2>

          <div>
            <CartProvider >
              <Messages/>
            </CartProvider>
          </div>

        </section>
      </div>

    </div>

  );
}

export default App;
