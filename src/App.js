import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AuthContext from "./context/AuthContext";
import JobDetails from "./components/JobDetails";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffa726",
      light: "#ffb240",
      dark: "#e08b0d",
      constrastText: "black",
    },
  },
});

function App() {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthContext>
        <CssBaseline />
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="jobs/:id" element={<JobDetails />} />
          </Routes>
        )}
      </AuthContext>
    </ThemeProvider>
  );
}

function Layout() {
  return (
    <div>
      <SearchAppBar />
      <Outlet />
    </div>
  );
}

export default App;
