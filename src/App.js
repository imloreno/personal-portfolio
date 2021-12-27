import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/index.scss";
import ReduxProvider from "./store";

import Home from "./components/screens/Home";
import Interactions from "./components/screens/Interactions";

function App() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/interactions" exact element={<Interactions />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
