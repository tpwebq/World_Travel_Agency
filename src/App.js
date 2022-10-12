import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ROUTES} from "./app.config";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import './sass/styles.scss';

function App() {
  let routerContent = ROUTES.map((item,idx)=>{
    return <Route key={idx} path={item.path} element={item.component}/>
  });
  return (
    <div className="App bg-light">
      <BrowserRouter>
          <header className="position-absolute w-100 px-2">
            <Navbar routes={ROUTES}/>
          </header>
          <Routes>
            {routerContent}
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
