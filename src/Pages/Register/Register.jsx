import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvide";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const {createNewUser}=useContext(AuthContext);
  const navigate=useNavigate();
     
    const handleRegisterSubmit=(event)=>{
        event.preventDefault();

         const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(name,email,password)
        createNewUser(email,password)
        .then(result=>{
          navigate('/login')
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error.message)
        })


    }



    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegisterSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-96 font-open" >
        <h2 className="text-2xl font-bold text-center mb-6">Register your account</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
       

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border  border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Terms & Conditions */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="mr-2"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I accept the{" "}
            <a href="#" className="text-green-600 hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        {/* Register Button */}
         <button
      type="submit"
      className="w-full btn btn-neutral text-white py-2 rounded-none hover:bg-blue-700 transition duration-200" >
      Login
    </button>
      </form>
    </div>
        </div>
    );
};

export default Register;