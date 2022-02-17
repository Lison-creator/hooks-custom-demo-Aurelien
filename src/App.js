import './App.css';
import Header from './containers/header/header';
import MessageContainer from './containers/message-container/message-container';

function App() {
  return (<>
    <Header />
    <div className="App">
      <MessageContainer />
    </div>
  </>);
}

export default App;
