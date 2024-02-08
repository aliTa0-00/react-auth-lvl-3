import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function AppBarr() {
  const nav = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 , width: `calc(100% - ${240}px)`, ml: `${240}px` }}>
      <AppBar position="static" sx={{bgcolor:'#272727'}}>
        <Toolbar>
        
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Store
            </Typography>

          <Button onClick={() => nav('/')} color="inherit">Go To Web Site</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
