import {BrowserRouter,Routes,Route} from "react-router-dom";
import './sass/styles.scss';
import Comingsoon from "./views/comingsoon";
import {ROUTES} from "./app.config";

function App() {
  let routerContent = ROUTES.map((item,idx)=>{
    return <Route key={idx} path={item.path} element={item.component}/>
  });
  return (
    <div className="App bg-secondary">
      <BrowserRouter>
          <Routes>
            {routerContent}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
