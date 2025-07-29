import { Route, BrowserRouter as Router, Routes } from "react-router";
import InvitePage from "./components/InvitePage/InvitePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/invite/:code" element={<InvitePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
