// import { useContext } from "react";
import { FaMeta } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
   // const {userLogin} = useContext(AuthContext);
   const handleLoginSubmit = (e) => {
      e.preventDefault();
      const from = e.target;
      const email = from.email.value;
      const password = from.password.value;
      // console.log(email, password);
      const user = { email, password };
      console.log(user);

      fetch("http://localhost:5000/user", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         });
   };
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-blue-600">Facebook</h1>
                  <p className="py-6 text-xl">Facebook helps you connect and share with the people in your life.</p>
               </div>
               <div className="card shrink-0 w-full max-w-sm">
                  <form onSubmit={handleLoginSubmit} className="card-body">
                     <div className="form-control">
                        <input type="email" placeholder="Email address or phone number" className="input input-bordered mb-2" name="email" required />
                     </div>
                     <div className="form-control">
                        <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn bg-blue-600 text-white text-xl">Log in</button>
                     </div>
                     <label className="label text-center">
                        <Link to={"/signUp"} className="label-text-alt link link-hover mx-auto text-sm text font-medium">
                           Forgot password?
                        </Link>
                     </label>
                  </form>
               </div>
               <div className="text-center">
                  <Link to={"/signUp"}>
                     <button className="btn btn-outline btn-success rounded-3xl ">Create new account</button>
                  </Link>
                  <div className="flex justify-center mt-8">
                     <h2 className="flex items-center gap-1 font-semibold">
                        <FaMeta /> Meta
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
