import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Header from './component/header/header';
import PictureMain from './component/picture_main';

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <PictureMain/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
