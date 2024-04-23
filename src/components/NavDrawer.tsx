import Drawer from "@mui/material/Drawer";

const NavDrawer = () => {

    const drawerWidth = 300;
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          border: 'none'
        }}
        variant="permanent"
        anchor="left"
      >
      </Drawer>
    );
}

export default NavDrawer;