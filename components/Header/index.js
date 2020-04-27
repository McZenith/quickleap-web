import { useStyles, AppBar, Toolbar, Typography, Button } from "./imports";

const Header = () => {
  const { root, title } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static" color="white" elevation={5}>
        <Toolbar>
          <Typography variant="h6" className={title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
