import delete1 from './delete1.png';
import delete2 from './delete2.png';
import delete3 from './delete3.png';
import delete4 from './delete4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        User data deletion instruction
      </header>
        <h1>Step 1 : Go to setting page and press delete account</h1>
        <img src={delete1} className="App-logo" alt="delete1" />
        <h1>Step 2 : Press on the text field</h1>
        <img src={delete2} className="App-logo" alt="delete2" />
        <h1>Step 3 : Type in DELETE keyword</h1>
        <img src={delete3} className="App-logo" alt="delete3" />
        <h1>Step 4 : Press on Delete Account and account will be sign out and deleted</h1>
        <img src={delete4} className="App-logo" alt="delete4" />
    </div>
  );
}

export default App;
