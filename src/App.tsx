import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { LandingPage } from "./pages/landing_page";
import { useSelector } from "react-redux";
import { appState } from "./types/appState";
import { user } from "./types/user";

const App = () => {
  const user = useSelector<appState, user | undefined>((state) => state.user);

  return (
    <Routes>
      {user == undefined ? (
        <>
          <Route path="*" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      ) : (
        <Route path="*" element={<div>App Layout</div>} />
      )}
    </Routes>
  );
};

export default App;
