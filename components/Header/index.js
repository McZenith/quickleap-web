import { useStyles, AppBar, Toolbar } from "./imports";

const Header = ({ children }) => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static" color="transparent" elevation={3}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
