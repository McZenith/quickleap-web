import {
  Header,
  Grid,
  useStyles,
  Button,
  Hidden,
  MenuIcon,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useState,
} from "./imports";

const NavLinks = [
  { title: "Home" },
  { title: "About" },
  { title: "Marketplace" },
  { title: "Inventory Manager" },
  { title: "Aggregator" },
  { title: "Account" },
  { title: "Blog" },
];

const NavBar = () => {
  const { list, fullList } = useStyles;
  const [draw, setDraw] = useState(false);
  const toggle = () => setDraw(!draw);

  const NavList = () => (
    <div role="presentation" onClick={toggle} onKeyDown={toggle}>
      <List>
        {NavLinks.map(({ title }, index) => (
          <ListItem button key={title}>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Header>
      <Grid container alignItems="stretch">
        <Grid item container alignItems="center" xs={3}>
          <img src="./logo.png" alt="quickleap logo" width="100px" />
        </Grid>
        <Grid item container alignItems="center" xs={9} justify="flex-end">
          <Hidden mdDown>
            {NavLinks.map(({ title }) => (
              <Button color="inherit" key={title}>
                {title}
              </Button>
            ))}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggle}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Drawer open={draw} onClose={toggle} anchor="right">
                {NavList()}
              </Drawer>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </Header>
  );
};

export default NavBar;
