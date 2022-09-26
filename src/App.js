import './App.css';
import { Provider } from 'react-redux';
import ContactContainer from './components/ContactContainer';
import store from './redux/store';

function App() {

 

  return (
    <Provider store={store}>
    <div className="App">
      
      <ContactContainer  />

    </div>
    </Provider>
  );
}

export default App;
