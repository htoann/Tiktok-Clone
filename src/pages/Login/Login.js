import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { config } from "~/config";
import { userLogin } from "~/features/authentication/userAction";
import Error from "~/components/Core/Error";

function Login() {
  const { loading, user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(config.routes.home);
    }
  }, [navigate, user]);

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
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              {...register("email")}
              required
            />
          </div>

          <div className="input">
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              {...register("password")}
            />
          </div>

          {error && <Error>Wrong email or password</Error>}

          <div className="button login">
            <button type="submit" disabled={loading}>
              <span>Login</span> <i className="fa fa-check"></i>
            </button>
          </div>

          {/* <a href="#" className="pass-forgot">
            Forgot your password?
          </a> */}
        </div>
      </div>
    </form>
  );
}

export default Login;
