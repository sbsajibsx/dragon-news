import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {logIn, setUser} = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
    .then(result =>{
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/")
    })
    .catch(err =>{
      setError({ ...error , login: err.code })
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-6">
        <h1 className="font-semibold text-4xl text-center">Login your account</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
              error?.login && <label className="label text-red-600 text-sm">
              {error.login}
            </label>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="font-semibold text-center">Dont’t Have An Account ? <Link className="text-red-500" to="/auth/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
