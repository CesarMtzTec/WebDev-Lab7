import './index.css';
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * NavBar component
 * @returns JSX for a navbar
 */
const NavBar = () => {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon className="menuIcon" />
        </IconButton>
        <Typography className="appTitle">Product Application</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
