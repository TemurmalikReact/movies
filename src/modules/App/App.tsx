import { FC } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import styles from './App.module.scss';
import ShowsContainer from '../../component/ShowsContainer/ShowsContainer';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <ShowsContainer />
        <Route 
          exact 
          path="/" 
          render={() => (
            <div>
              <Link to="/shows"> Shows </Link>
              <Link to="/movies"> Movies </Link>
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
