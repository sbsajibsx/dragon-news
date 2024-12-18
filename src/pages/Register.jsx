import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({name, email, photo, password})
    createNewUser(email, password)
    .then(result => {
      console.log(result)
      const user = result.user;
      // setUser(user);
      updateUserProfile({ displayName: name, photoURL: photo })
      .then((r)=>{
        console.log(r)
        navigate("/")
        setUser({...user, displayName: name, photoURL: photo})
        
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-6">
        <h1 className="font-semibold text-4xl text-center">
        Register your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
            name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already Have An Account ?
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
