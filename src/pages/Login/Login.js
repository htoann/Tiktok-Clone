import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "~/features/user/userAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Login.scss";
import { config } from "~/config";
import Error from "~/components/Error";

function Login() {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(config.routes.profileLink(userInfo.nickname));
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="login_form">
      <div className="materialContainer">
        <div className="box">
          <div className="title">LOGIN</div>
          <div className="input">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              {...register("email")}
              required
            />
            <span className="spin"></span>
          </div>

          <div className="input">
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              {...register("password")}
            />
            <span className="spin"></span>
          </div>

          {error && <Error>Wrong email or password</Error>}

          <div className="button login">
            <button type="submit" disabled={loading}>
              <span>Login</span> <i className="fa fa-check"></i>
            </button>
          </div>

          <a href="" className="pass-forgot">
            Forgot your password?
          </a>
        </div>

        {/* <div className="overbox">
          <div className="material-button alt-2">
            <span className="shape"></span>
          </div>

          <div className="title">REGISTER</div>

          <div className="input">
            <label htmlFor="regname">Username</label>
            <input type="text" name="regname" id="regname" />
            <span className="spin"></span>
          </div>

          <div className="input">
            <label htmlFor="regpass">Password</label>
            <input type="password" name="regpass" id="regpass" />
            <span className="spin"></span>
          </div>

          <div className="input">
            <label htmlFor="reregpass">Repeat Password</label>
            <input type="password" name="reregpass" id="reregpass" />
            <span className="spin"></span>
          </div>

          <div className="button">
            <button>
              <span>NEXT</span>
            </button>
          </div>
        </div> */}
      </div>
    </form>
  );
}

export default Login;
