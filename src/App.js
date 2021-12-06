import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/index.scss";
import ReduxProvider from "./store";

import Home from "./components/screens/Home";

function App() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
