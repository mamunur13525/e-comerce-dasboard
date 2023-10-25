import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./components/Routes/PageRoutes";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
