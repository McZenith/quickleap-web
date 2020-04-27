import { useStyles, AppBar, Toolbar } from "./imports";

const Header = () => {
  const { root, toolbar } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static" color="white" elevation={3}>
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
