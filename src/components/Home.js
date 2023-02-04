import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import { Grid } from "@mui/material";
// import jobs from "../jobs.json";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import AuthContext from "../context/AuthContext";
// import { authContext } from "../context/AuthContext";
// import { useContext } from "react";

function Home() {
  // console.log(state);
  const [jobs, setJobs] = useState(null);
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    fetch(`http://localhost:8000/jobs?_page=${page}&_limit=6`)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container spacing={0} sx={{ width: "80%", mx: "auto" }}>
        {jobs &&
          jobs.map((job) => (
            <Grid item xs={12} md={6} lg={4}>
              <JobCard job={job} />
            </Grid>
          ))}
      </Grid>
      <Box sx={{ mx: "auto", width: "80%", pb: 2 }}>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{
            width: "25rem",
            mx: "auto",
            pt: 3,
          }}
        />
      </Box>
    </>
  );
}

export default Home;
