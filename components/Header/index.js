import { useStyles, AppBar, Toolbar, useMediaQuery, useTheme } from "./imports";

const Header = () => {
  const { root, toolbar } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={root}>
      <AppBar position="static" color="white" elevation={3}>
        <Toolbar className={matches ? toolbar : null}></Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
