import './App.css';
import RegisterForm from './components/useStateHook';
import TextInputWithFocusButton from './components/useRefHook';

function App() {
  return (
    <div className="App1">
        <RegisterForm/>
        <TextInputWithFocusButton/>
    </div>
  );
}

export default App;
