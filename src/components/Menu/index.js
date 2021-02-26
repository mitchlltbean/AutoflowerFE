import React, { useState, forwardRef } from "react";
import { List, ListItem, Button, Drawer } from "@material-ui/core"; // "Collapse," removed due to it only applying to sub-menu's
import clsx from "clsx";
import { NavLink as RouterLink } from "react-router-dom";
import menuItems from "./sideMenuItems";
import useStyles from "./sideBarStyles";

const Menu = (props) => {
  const [menu, setMenu] = useState({});
  const { className, ...rest } = props;
  const classes = useStyles();
  const handleClick = (item) => {
    let newData = { ...menu, [item]: !menu[item] };
    setMenu(newData);
  };
  const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  ));
  const handleMenu = (children, level = 0) => {
    return children.map(({ children, name, url, links }) => {
      if (!children) {
        return (
          // =====Code for setting menu items==============================================================
          <List component="div" disablePadding key={name}>
            <ListItem
              className={classes.item}
              disableGutters
              style={{ padding: "0px" }}
              key={name}
            >
              {/*=====Code for rendering each menu item==================================================================*/}
              <Button
                className={clsx({
                  [classes.btnRoot]: true,
                  [classes.button]: true,
                  [classes.subMenu]: level,
                })}
                component={CustomRouterLink}
                to={url}
              >
                {name}
              </Button>
              {/* ======================================================================================== */}
            </ListItem>
          </List>
        );
      }
      //=========================Code for Sub-Menu's=======================================================
      //--
      // import { ExpandLess, ExpandMore } from "@material-ui/icons";
      //--
      // return (
      //   <div key={name}>
      //     <ListItem
      //       className={classes.item}
      //       disableGutters
      //       key={name}
      //       onClick={() => handleClick(name)}
      //     >
      //       <Button
      //         className={clsx({
      //           [classes.btnRoot]: true,
      //           [classes.button]: true,
      //           [classes.subMenu]: level,
      //         })}
      //       >
      //         {name} {menu[name] ? <ExpandLess /> : <ExpandMore />}
      //       </Button>
      //     </ListItem>
      //     <Collapse in={menu[name] ? true : false} timeout="auto" unmountOnExit>
      //       {handleMenu(children, 1)}
      //     </Collapse>
      //   </div>
      // );
      //===================================================================================================
    });
  };

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={true}
      variant="persistent"
    >
      <List {...rest} className={clsx(classes.root, className)}>
        {handleMenu(menuItems.data)}
      </List>
    </Drawer>
  );
};

export default Menu;

{
  /* // TODO have onclick render component for each item  */
}
{
  /* // TODO link this to components that will hold the information from the database, perhaps rope it in with the active Page state  */
}
{
  /* // TODO create event listoners for each tab so that it renders the right information when selected */
}
{
  /* // TODO probably want to switch between segments to correspond with the menu */
}
{
  /* // TODO possible dropdown with Help/Contact/FAQ type of deal */
}
