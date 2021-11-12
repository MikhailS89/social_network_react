import './App.css';
import Message from './Message/Message';

const learn = 'Learn React';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Message title={learn}/>
        </p>
      </header>
    </div>
  );
}

export default App;
