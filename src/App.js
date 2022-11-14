import logo from './logo.svg';
import './App.css';
import addNotification from 'react-push-notification';

function App() {
  const buttonClick = () => {
    addNotification({
        title: 'Warning',
        subtitle: 'This is a subtitle',
        message: 'This is a very long message',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
};

  return (
    <div className="App">
      <button onClick={setTimeout(buttonClick,5000)}>click</button>
    </div>
  );
}

export default App;
