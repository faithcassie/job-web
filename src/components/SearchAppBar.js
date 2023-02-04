import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { authContext } from "../context/AuthContext";
import LogInModal from "./LogInModal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [open, setOpen] = React.useState(false);

  const { user, logOut } = React.useContext(authContext);
  const handleOpen = () => setOpen(true);
  // console.log(user);

  //password

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ mx: "auto", width: "70%" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              JOB ROUTING
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              <IconButton>
                <LoginIcon sx={{ display: { xs: "none", md: "flex" } }} />
                <Typography
                  component="div"
                  sx={{ pl: "10px", display: { xs: "none", md: "flex" } }}
                >
                  {user.name ? (
                    <>
                      <p>{user.name}</p>
                      <Button
                        onClick={logOut}
                        style={{
                          textDecoration: "none",
                          color: "white",
                          backgroundColor: "transparent",
                        }}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      Sign In
                    </Button>
                  )}
                </Typography>
                <MoreVertIcon sx={{ display: { xs: "flex", md: "none" } }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <LogInModal open={open} setOpen={setOpen} />
    </>
  );
}
