import LoggedOut from "./pages/LoggedOut";
import GlobalStyle from "./components/GlobalStyles";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Logged from "./pages/Logged";
import RankingPage from "./pages/Ranking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoggedOut />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logged" element={<Logged />} />
          <Route path="/rankingpage" element={<RankingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
