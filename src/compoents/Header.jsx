import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const Header = () => {
  const cookie = new Cookies();
  const token = cookie.get("Token");

  const nav = useNavigate();

async function handelLogout() {
  console.log('don')
    try {
     await axios.post('http://127.0.0.1:8000/api/logout' , null , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
     })
     cookie.remove('Token')
     nav('/')

    } catch (err) {
      console.log(err)
      
    }
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Store
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Home</Button>
          </Typography>
          {!token ? (
            <>
              {" "}
              <Button onClick={() => nav("/Signup")} color="inherit">
                Signup
              </Button>
              <Button onClick={() => nav("/Login")} color="inherit">
                Login
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handelLogout}>
              Log Out
              </Button>
              <Button onClick={() => nav("/Dashboard")} color="inherit">Dashboard</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
