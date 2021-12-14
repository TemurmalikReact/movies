import { StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './modules/App/App';
import store from './redux/store';
import './styles/index.scss';

ReactDOM.render(
  <StrictMode> 
    <Provider store={store} > 
      <App /> 
    </Provider>
  </StrictMode>, 
  document.getElementById('root'),
);
