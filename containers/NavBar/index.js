import {
  Header,
  Grid,
  useStyles,
  Button,
  Hidden,
  MenuIcon,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "./imports";

const NavLinks = [
  { title: "Home" },
  { title: "About" },
  { title: "Marketplace" },
  { title: "Logistics Service" },
  { title: "Inventory Manager" },
  { title: "Aggregator" },
  { title: "Account" },
  { title: "Blog" },
  { title: "Contact Us" },
];

const NavBar = () => {
  const {} = useStyles;
  const [draw, setDraw] = React.useState(false);

  return (
    <Header>
      <Grid container alignItems="stretch">
        <Grid item conatiner alignItems="center" xs={3}>
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
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Grid>
      </Grid>
    </Header>
  );
};

export default NavBar;
