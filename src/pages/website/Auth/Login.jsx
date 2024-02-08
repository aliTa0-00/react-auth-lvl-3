/* eslint-disable no-unused-vars */
import { Button, Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../../../compoents/Header";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../Context/UserContext";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState(false);

  const [accept, setaccept] = useState(false);
  const nav = useNavigate();

  const userNow = useContext(User);

  const cookie = new Cookies();

  async function submitFunc(e) {
    e.preventDefault();
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      // context تخزين التوكين ومعلومات المستخدم داخل
      const token = res.data.data.token;
      cookie.set("Token", token);
      const userDetalis = res.data.data.user;
      userNow.setauth({ token, userDetalis });
      nav("/Dashboard");
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        setemailError(true);
      }
      setaccept(true);
    }
  }

  return (
    <>
      <Header />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: "55%",
            m: "auto",
            p: 3,
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "55ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TextField
                error={emailError && accept}
                fullWidth
                label="Email"
                type="email"
                required
                size="small"
                helperText={
                  accept && emailError && "The email has already been taken."
                }
                onChange={(e) => setemail(e.target.value)}
              />
              <TextField
                error={password.length < 8 && accept}
                fullWidth
                label="Password"
                type="password"
                size="small"
                helperText={
                  accept &&
                  password.length < 8 &&
                  "The password must be more than 8 characters"
                }
                onChange={(e) => setpassword(e.target.value)}
              />

              <Button onClick={submitFunc} type="submit" variant="contained">
                Login
              </Button>
            </Stack>
          </Box>
        </Paper>
      </div>
    </>
  );
};

export default Login;
