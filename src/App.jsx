import { Route, BrowserRouter as Router, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import InvitePage from "./pages/InvitePage/InvitePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invite/:inviteCode" element={<InvitePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
