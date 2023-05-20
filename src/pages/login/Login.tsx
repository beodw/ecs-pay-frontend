import { Link } from "react-router-dom";

function Login() {
  return <div>
  <div className="grid md:grid-cols-4">
    <div className="col-span-3">
      <div className="logoBar flex justify-between">
        <img
          src="../../../assets/Mask group.png"
          alt="Your Image"
          className="object-contain logo lg:ml-40"
        />

        <div className="logincontainer flex">
          <div className="alreadyregistered sm:d-none ">
           <Link to="/login">Not Registered Yet?</Link>
          </div>

          <button
            className="rounded-full loginbtn hover:bg-black"
            
          >
            SignUp
          </button>
        </div>
      </div>

      <div className="mx-auto mb-3 w-64 createactdiv" style={{marginTop:'102px'}}>
        <form>
          <div style={{ fontSize: "14px", fontWeight: 400, marginLeft:'auto', marginRight: 'auto', maxWidth: '484px' }}>
          Welcome Back
          </div>
          <div
            style={{ marginTop: "12px", fontWeight: 500, fontSize: "24px", marginLeft:'auto', marginRight: 'auto', maxWidth: '484px' }}
          >
            Continue transactions were you left off
          </div>

          <div className="mb-5" style={{marginTop:'54px'}}>
            <input
              className=" appearance-none border rounded-full w-full py-2 px-3 mb-2  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
            />

            <div style={{ width:'484px', color:'#9A9BA0', marginLeft:'auto', marginRight:'auto'}}>
              Use Phone Number
            </div>
          </div>

          <div className="mb-4">
            <input
              className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="password"
              placeholder="Password"
            />

            <div className="flex justify-between mt-1 mb-2" style={{ fontSize: "12px", width:'484px', color:'#9A9BA0', marginLeft:'auto', marginRight:'auto'}}>
            <div className="flex mb-3">
            <input
              id="myCheckbox"
              type="checkbox"
              className="h-5 w-5 rounded"
            />
            <label
              htmlFor="myCheckbox"
              className="ml-2"
            >
              Remember Me
            </label>
          </div>

<div>
<Link to="/forgotpassword">Forgot Password</Link>
</div>
            </div>
          </div>

          
          <div className="flex items-center justify-center mb-11" style={{marginTop:'34px'}}>
            <button className="base-btn hover:text-white" type="button">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="background col-span-1 "></div>
  </div>
</div>;
}

export default Login;
