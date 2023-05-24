import { useNavigate } from "react-router-dom";
import checkedimg from "../../../assets/checked.png";
import notcheckedimg from "../../../assets/notchecked.png";
import { useState } from "react";

function SignUp() {
  const router = useNavigate();

  const handleLogin = () => {
    router("/login");
  };

  const [activeStep, _setActiveStep] = useState(0);
  const [checked, _setCheck] = useState(false);
  const [notchecked, _setNotCheck] = useState(true);

  // const handlePrevious = () => {
  //   setActiveStep((prevStep) => prevStep - 1);

  // };

  return (
    <div>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <div className="logoBar flex justify-between">
            <img
              src="../../../assets/Mask group.png"
              alt="Your Image"
              className="max-w-full h-auto logo lg:ml-40"
            />

            <div className="logincontainer flex">
              <div className="alreadyregistered sm:d-none ">
                Already Registered?
              </div>

              <button
                className="rounded-full loginbtn hover:bg-black"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>

          <div className="mx-auto mb-3 w-64 createactdiv ">
            {/* Stepper  */}
            <div className="flex justify-center mb-8">
              <div className={activeStep >= 0 ? "activestep" : "inactivestep"}>
                {checked && (
                  <img src={checkedimg} alt="My Image" className="checkedimg" />
                )}
              </div>

              {/* horizontal line */}
              <div
                className={
                  activeStep >= 1 ? "activestepper" : "inactivestepper"
                }
              ></div>
              <div className={activeStep >= 1 ? "activestep" : "inactivestep"}>
                {checked && <img src={checkedimg} className="checkedimg" />}
                {notchecked && (
                  <img src={notcheckedimg} className="notcheckedimg" />
                )}
              </div>
              {/* horizontal line */}
              <div
                className={
                  activeStep >= 1 ? "activestepper" : "inactivestepper"
                }
              ></div>

              <div className={activeStep >= 2 ? "activestep" : "inactivestep"}>
                {checked && <img src={checkedimg} className="checkedimg" />}
                {notchecked && (
                  <img src={notcheckedimg} className="notcheckedimg" />
                )}
              </div>

              <div
                className={
                  activeStep >= 1 ? "activestepper" : "inactivestepper"
                }
              ></div>

              <div className={activeStep >= 2 ? "activestep" : "inactivestep"}>
                {checked && <img src={checkedimg} className="checkedimg" />}
                {notchecked && (
                  <img src={notcheckedimg} className="notcheckedimg" />
                )}
              </div>
            </div>
            <form>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "484px",
                }}
              >
                Create your account
              </div>
              <div
                style={{
                  marginTop: "12px",
                  fontWeight: 500,
                  fontSize: "24px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "484px",
                }}
              >
                Send and Receive Money Internationally from Africa with ECS Pay
              </div>

              <div
                className="mb-4 flex justify-between gap-3"
                style={{
                  marginTop: "37px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "484px",
                }}
              >
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="mb-4">
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email Address"
                />
              </div>

              <div
                className="mb-3 flex justify-between gap-3"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "484px",
                }}
              >
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                />
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="base-btn" type="button">
                  Next
                </button>
              </div>

              <div
                className="flex items-center mb-3"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "484px",
                }}
              >
                <input
                  id="myCheckbox"
                  type="checkbox"
                  className="h-5 w-5 rounded"
                />
                <label
                  htmlFor="myCheckbox"
                  className="ml-2"
                  style={{ fontSize: "12px" }}
                >
                  By creating an account, I acknowledge that I have read and
                  accept the terms and conditions of ECS Pay
                </label>
              </div>

              <div
                className="text-center"
                style={{ color: "#FBCC05", fontSize: "12px" }}
              >
                Terms of Service
              </div>
            </form>
          </div>
        </div>
        <div className="background col-span-1 "></div>
      </div>
    </div>
  );
}

export default SignUp;
