import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import TextTruncate from "react-text-truncate";
// import { useState } from "react";
// import Modal from "@mui/material/Modal";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogInModal from "./LogInModal";
import { useState } from "react";

export default function OutlinedCard({ job }) {
  const [open, setOpen] = useState(false);
  const { user } = React.useContext(authContext);
  // console.log(job.id);
  const navigate = useNavigate();
  // const location = useLocation();
  const card = (
    <React.Fragment>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: 220 }}
      >
        <Typography variant="h7" component="div" sx={{ mb: 2 }}>
          {job.title}
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Box>
          {job.skills.slice(0, 3).map((skill) => (
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
        <Typography variant="body2" sx={{ height: 70, mt: 2 }}>
          <TextTruncate
            line={3}
            element="Typoraphy"
            truncateText="…"
            text={job.description}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            // console.log(user.name);
            if (!user.name) {
              setOpen(true);
            } else {
              navigate(`jobs/${job.id}`, {
                state: { backgroundLocation: { pathname: "/" } },
              });
            }
          }}
          variant="contained"
          sx={{
            backgroundColor: "#ffa726",
            p: 0.7,
            mb: 1,
            mx: "auto",
          }}
        >
          Learn More
        </Button>
      </CardActions>
      <LogInModal open={open} setOpen={setOpen} jobId={job.id} />
    </React.Fragment>
  );
  return (
    <>
      <Box sx={{ minWidth: 275, width: "100%", mt: 5 }}>
        <Card sx={{ mx: 2, backgroundColor: "#414141" }}>{card}</Card>
      </Box>
    </>
  );
}
