import { Box, makeStyles } from "@material-ui/core";
import { Router, Route } from "preact-router";
import { LoginRoute, HomeRoute } from "./routes";

const useStyles = makeStyles(() => ({
  root: {
    border: "solid 1px blue",
    height: "100vh",
    width: "100vw",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Router>
        <Route path="/" component={HomeRoute} />
        <Route path="/login" component={LoginRoute} />
      </Router>
    </Box>
  );
};

export default App;
