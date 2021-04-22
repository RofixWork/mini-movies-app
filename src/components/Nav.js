import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import searchMovies from "../store/actions/SearchMovie";
import getAllMovies from "../store/actions/Movies";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTypography-h6": {
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
        marginRight: 10,
      },
    },
    "& .MuiAppBar-root": {
      backgroundColor: "#222",
    },
    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  icon: {
    fontSize: 30,
    [theme.breakpoints.up("md")]: { display: "none" },
    [theme.breakpoints.down("xs")]: { marginLeft: 14 },
  },
}));
const Nav = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { search: searchInp } = useSelector((state) => state.MovieReducer);
  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    dispatch({ type: "SEARCH", payload: search });

    if (e.keyCode === 13) {
      if (search.trim() === "") {
        dispatch(getAllMovies());
      } else {
        dispatch(searchMovies(searchInp));
      }
    }
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Box className={classes.title}>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">Movies</Typography>
              </Box>
            </Box>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={handleChange}
                onKeyUp={handleSearch}
              />
            </div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={openSidebar}
            >
              <MenuIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Nav;
