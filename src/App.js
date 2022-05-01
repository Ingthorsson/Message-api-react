import './App.css';
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import { MessageProvider } from "./MessageContext";


function App() {

  return (

    <div className="container">
      <MessageProvider >
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
      </MessageProvider>
    </div>

  );
}

export default App;
