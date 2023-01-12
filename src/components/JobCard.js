import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
// import { positions } from "@mui/system";

export default function OutlinedCard({ job }) {
  const card = (
    <React.Fragment>
      <CardContent sx={{ height: 200 }}>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          {job.title}
        </Typography>
        <Divider sx={{ mb: 1 }} />
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

        <Typography variant="body2" sx={{ mt: 2 }}>
          {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
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
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275, width: "100%", mt: 5 }}>
      <Card sx={{ mx: 2, backgroundColor: "#414141" }}>{card}</Card>
    </Box>
  );
}
