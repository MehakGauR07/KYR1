import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Navigate} from "react-router-dom";
import GetStarted from "./layouts/GetStarted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/get-started" element={<GetStarted/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
