import { Box, Modal, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const style = {
  position: "relative",
  margin: "auto",
  marginTop: 20,
  width: { xs: 300, sm: 400, md: 500 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
  paddingBottom: 6,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
function JobDetails() {
  const location = useLocation();
  console.log(location.pathname);
  const [job, setJob] = useState("");
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/faithcassie/job-api${location.pathname}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJob(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(job.skills);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5" component="h2">
            {job.title}
          </Typography>

          <Typography sx={{ mt: 2 }}>{job.description}</Typography>
          <Box>
            <Typography sx={{ mt: 2, textAlign: "center", mb: 2 }}>
              Skills:
            </Typography>
            <Box>
              {job &&
                job.skills.slice(0, 3).map((skill) => (
                  <Typography
                    sx={{
                      display: "inline",
                      mr: 1,
                      p: 0.5,
                      fontSize: 11,
                      backgroundColor: "#E64330",
                      color: "white",
                      borderRadius: 3,
                      fontWeight: "bold",
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
            </Box>
          </Box>
          <Typography sx={{ mt: 2 }}>City: {job.city}</Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default JobDetails;
