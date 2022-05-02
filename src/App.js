import './App.css';
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import { MessageProvider } from "./MessageContext";
import {Helmet} from "react-helmet";


function App() {

  return (

    <div className="container">
      <Helmet>
        <title>Messages API</title>
    </Helmet>
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
