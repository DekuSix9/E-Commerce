import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvide";


const Login = () => {
  const {loginUser}=useContext(AuthContext)
    const handleLoginSubmit=(e)=>{
         e.preventDefault();
       const email=e.target.email.value;
      const password=e.target.password.value;
      console.log(email,password);

      loginUser(email,password)
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.log(error.message)
      })

    }


    return (
        <div>
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form onSubmit={handleLoginSubmit} className="bg-white p-8 rounded-2xl shadow-md w-96 font-open">
    <h2 className="text-2xl font-semibold text-center mb-6">Login your account </h2>


    <div className="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

 
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
     
      <div className="text-right mt-2">
        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
      </div>
    </div>

 
    <button
      type="submit"
      className="w-full btn btn-neutral text-white py-2 rounded-none hover:bg-blue-700 transition duration-200" >
      Login
    </button>
    <p className=" text-center font-semibold mt-6">Don't Have An Account ? <Link className=" text-red-500" to='/register'>Register</Link> </p>
  </form>
  
</div>
        </div>
    );
};

export default Login;