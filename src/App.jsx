import { Route, BrowserRouter as Router, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import InvitePage from "./pages/InvitePage/InvitePage";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invite/:inviteCode" element={<InvitePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
