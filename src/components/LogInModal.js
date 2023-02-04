import React from "react";
import Modal from "@mui/material/Modal";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LogInModal({ open, setOpen, jobId }) {
  const { logIn, style } = React.useContext(authContext);
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    logIn(name);
    setOpen(false);
    if (jobId) {
      navigate(`jobs/${jobId}`, {
        state: { backgroundLocation: { pathname: "/" } },
      });
    }
  };

  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Avatar
          style={{
            backgroundColor: "#E64330",
            color: "black",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h1"
          sx={{ mb: 3, mt: 2 }}
        >
          Log In
        </Typography>
        <TextField
          label="Username"
          placeholder="Enter username"
          id="outlined-required"
          defaultValue="web virgil learner"
          value={name}
          required
          sx={{ m: 1, width: "90%" }}
          onChange={handleChange}
        />
        <FormControl
          sx={{ m: 1, width: "90%" }}
          id="outlined-required"
          required
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            defaultValue="123456"
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffa726",
            p: 0.7,
            mt: 3,
            mx: "auto",
            width: "90%",
          }}
          onClick={handleSubmit}
        >
          Sign in
        </Button>
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Link
            href="#"
            underline="none"
            style={{
              fontSize: "13px",
              textDecoration: "none",
              color: "#ffa726",
            }}
          >
            Forgot password?
          </Link>
          <Link
            href="#"
            underline="none"
            style={{
              fontSize: "13px",
              textDecoration: "none",
              color: "#ffa726",
            }}
          >
            Didn't have an account? Sign up
          </Link>
        </div>
      </Box>
    </Modal>
  );
}

export default LogInModal;
