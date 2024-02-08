import { Box } from "@mui/material";
import AppBarr from "../../compoents/AppBarr";
import SideBar from "../../compoents/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {


  return (
    <Box>
      <AppBarr/>
      <SideBar/>
        <Box sx={{ml:'240px' , color:'#121212'}} >
          <h1>Dashboard</h1>
          <Outlet/>
        </Box>
    </Box>
  );
}

export default Dashboard;
