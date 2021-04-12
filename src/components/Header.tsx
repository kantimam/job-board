import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";

import rediLogo from "../static/redi-logo.png";

const useStyles = makeStyles(() =>
  createStyles({
    titleContainer: { flexGrow: 1 },
    unstyledLink: {
      textDecoration: "inherit",
    },
    logo: {
      height: "48px",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Box className={classes.titleContainer}>
            <Link to="/">
              <img
                src={rediLogo}
                alt="ReDi Community Job Board"
                className={classes.logo}
              />
            </Link>
          </Box>
          <Hidden smDown>
            <Link to="/add" className={classes.unstyledLink}>
              <Button
                variant="contained"
                color="default"
                startIcon={<PublishIcon />}
              >
                Publish Job Listing
              </Button>
            </Link>
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              open={drawerOpen}
              anchor="right"
              onClose={() => setDrawerOpen(false)}
            >
              <List>
                <ListItem>
                  <Link to="/add" className={classes.unstyledLink}>
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={<PublishIcon />}
                    >
                      Publish Job Listing
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
