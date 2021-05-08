import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import './app.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="87cde2ce-eea2-41c0-8697-825edab0d0ad"
            userName="admin"
            userSecret="123456"
            renderChatFeed={(ChatAppProps)=><ChatFeed {...ChatAppProps}/>}
        
        />
    )
}

export default App;
