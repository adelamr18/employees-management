import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { DRAWER_WIDTH } from "../../../shared/constants/Header";
import "./Header.scss";
import { Link } from "../../../interfaces/Header";
import { ROUTES } from "../../../shared/constants/Routes";

interface HeaderProps {
  window?: () => Window;
  logoSrc: string;
  headerLinks: Link[];
}

export const Header: FC<HeaderProps> = ({ window, logoSrc, headerLinks }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogoClick = (): void => {
    navigate(ROUTES.DASHBOARD);
  };

  const handleButtonClick = (link: Link) => {
    navigate(link.route);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {headerLinks.map((item: Link, index: number) => (
          <ListItem onClick={() => handleButtonClick(item)} key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="main-bar" sx={{ display: "flex" }}>
      <AppBar className="main-bar" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img style={{ cursor: "pointer" }} onClick={() => handleLogoClick()} alt="logo" src={logoSrc} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {headerLinks.map((item: Link, index: number) => (
              <Button onClick={() => handleButtonClick(item)} key={index} sx={{ color: "#fff" }}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER_WIDTH },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
