import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formInput: {
    width: "100%",
    marginTop: theme.spacing(4),
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  passwordInput: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
}));

const LoginRoute = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h2">Stream-hat</Typography>
      <Typography variant="h5">
        Livestream your screen and share it with friends.
      </Typography>
      <Box width={500} className={classes.formWrapper}>
        <TextField
          placeholder="email"
          className={classes.formInput}
          variant="outlined"
          color="secondary"
        />
        <TextField
          placeholder="password"
          className={classes.passwordInput}
          variant="outlined"
          color="secondary"
        />
        <Button variant="contained" color="primary">
          SignIn
        </Button>
      </Box>
    </Box>
  );
};

export default LoginRoute;
