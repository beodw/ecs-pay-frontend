function SignUp() {
  return<div>
    <div className="grid md:grid-cols-2" >
    
  <div>
    <div className="logoBar flex justify-between">
    <img src="../../../assets/Mask group.png" alt="Your Image" className="object-contain logo"/>
    
    <div className="logincontainer flex">
      <div className="alreadyregistered">
Already Registered?
</div>
      

      <button className="rounded-full loginbtn hover:bg-black" >Login</button>
    </div>

    </div>

    <div className="w-96 mx-auto mb-3" style={{marginTop:'67px'}}>
  <form>
    <p style={{fontSize:'14px'}}>Create your account</p>
    <p style={{marginTop:'12px', fontWeight:'500', fontSize:'medium'}}>Send and Receive Money Internationally from Africa with ECS Pay</p>
    
    <div className="mb-4 flex justify-between gap-3" style={{marginTop:'37px'}}>
      <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="First Name" />
      <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Last Name" />
    </div>
    <div className="mb-4">
    <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username" />
    </div>

    <div className="mb-4">
    <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email Address" />
    </div>

    <div className="mb-3 flex justify-between gap-3">
    <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
    <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
    </div>
    <div className="flex items-center justify-center mb-4">
      <button className="base-btn hover:text-white" type="button">
        Next
      </button>
    </div>

    <div className="flex items-center mb-3">
  <input id="myCheckbox" type="checkbox" className="h-5 w-5 rounded" />
  <label htmlFor="myCheckbox" className="ml-2" style={{fontSize:'12px'}}>By creating an account, I acknowledge that I have read and accept the terms and conditions of ECS Pay</label>
</div>

    <div className="text-center" style={{color:'#FBCC05', fontSize:'12px'}}>Terms of Service</div>
  </form>
</div>
    </div>
  <div className="background">
    
  </div>
</div>
  </div>;
}

export default SignUp;
