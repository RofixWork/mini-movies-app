import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
}));
const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleSidebar } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };
  return (
    <>
      {mobile ? (
        <Drawer open={toggleSidebar} onClose={closeSidebar}>
          <List className={classes.list}>
            <ListItem button>
              <ListItemText primary="Popular" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="All Movies" />
            </ListItem>
          </List>
        </Drawer>
      ) : null}
    </>
  );
};

export default Sidebar;
