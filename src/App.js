import './App.scss';
import Message from './Message/Message';

const learn = 'Message';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__wrp">
          <Message title={learn}/>
        </div>
      </header>
    </div>
  );
}

export default App;
