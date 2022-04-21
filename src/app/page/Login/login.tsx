import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { openNotification } from "../../component/Notifi/noti";
// import { postLogin } from "../../features/Customer/account";
// import { accountStore } from "../../features/use-selector";
import "./login.css";
function Login() {
  // const dispatch = useAppDispatch();
  const history = useNavigate();

  // const acc = useAppSelector(accountStore);
  // console.log(acc);

  // useEffect(() => {
  //   if (acc.token.length > 0) {
  //     history("/");
  //   }
  // }, [acc.token]);

  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      submit()
    }
  };

  function submit() {
    console.log(username, password);
    if (username.length > 0 && password.length > 0) {
      // dispatch(
      //   postLogin({
      //     username,
      //     password,
      //   })
      // );
    } else {
      // openNotification({
      //   message: "Vui lòng điền username và password",
      //   type: "warning",
      // });
    }
  }
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name=""
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <label>Password</label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="#" onClick={submit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SIGNIN
          </a>

          <Link to="/register">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
