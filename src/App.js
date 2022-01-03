import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReduxProvider from "./store";
import "./sass/index.scss";

import Home from "./components/screens/Home";
import Interactions from "./components/screens/Interactions";

function App() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/interactions" exact element={<Interactions />} />
          <Route path="/:target" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
