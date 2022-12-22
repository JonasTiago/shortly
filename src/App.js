import LoggedOut from "./pages/LoggedOut";
import GlobalStyle from "./components/GlobalStyles";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Logged from "./pages/Logged";
import RankingPage from "./pages/Ranking";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <LoggedOut /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Logged /> */}
      <RankingPage />
    </div>
  );
}

export default App;
