import './App.css';
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import { CartProvider } from "./CartContext";


function App() {

  return (

    <div className="container">
      <CartProvider >
        <div className="main">
          <h1 className="page-title">Messages</h1>
          <MessageForm />

          <section className="msg-container">
            <h2 className="msg-title">Messages from DynamoDB</h2>
            <div>
              <Messages />
            </div>
          </section>

        </div>
      </CartProvider>
    </div>

  );
}

export default App;
