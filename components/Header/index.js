import { useStyles, AppBar, Toolbar, Typography, Button } from "./imports";

const Header = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static" color="white" elevation={3}>
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
