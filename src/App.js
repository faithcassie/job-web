import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import JobCard from "./components/JobCard";
import { Grid } from "@mui/material";
import jobs from "./jobs.json";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar />
      <Grid container spacing={0} sx={{ width: "75%", mx: "auto" }}>
        {jobs.slice(0, 5).map((job) => (
          <Grid item xs={12} md={6} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mx: "auto", width: "80%" }}>
        <Pagination
          count={3}
          color="primary"
          sx={{
            width: "12rem",
            mx: "auto",
            pt: 3,
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
