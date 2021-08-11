import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import ExifTest from './component/exif_test';
import Header from './component/header/header';
import PictureMain from './component/picture_main';

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <ExifTest/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
