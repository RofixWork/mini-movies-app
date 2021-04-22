import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllMovies from "../store/actions/Movies";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 0",
  },
  imgHaeder: {
    width: "100%",
    height: "400px",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  empty: {
    color: "white",
    padding: "40px 0",
    textAlign: "center",
  },
}));
const Hero = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.MovieReducer);
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  const backToHome = () => {
    dispatch(getAllMovies());
  };
  if (movies.length < 1) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {movies.map((movie, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
                <Box className={classes.imgHaeder}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
