import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SignUp = () => {
   return (
      <div className="text-center h-screen flex items-center justify-center">
         <div>
            <h2 className="text-xl mb-4">Oops!</h2>
            <Link to={"/"}>
               <button className="btn">
                  <FaArrowLeft /> Back
               </button>
            </Link>
         </div>
      </div>
   );
};

export default SignUp;
