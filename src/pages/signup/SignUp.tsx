import { useNavigate } from "react-router-dom";
import checkedimg from "../../../assets/checked.png";
import notcheckedimg from "../../../assets/notchecked.png";
import { Form1, Form2, Form3, Form4 } from ".";
import { useState } from "react";

function SignUp() {
  const router = useNavigate();

  const handleLogin = () => {
    router("/login");
  };

  // Implementation for stepper
  const [activeStep, setActiveStep] = useState(1);
  const [activeComponent, setComponent] = useState(0);
  const [checked1, setCheck1] = useState(false);
  const [notchecked1, setNotCheck1] = useState(true);
  const [checked2, setCheck2] = useState(false);
  const [notchecked2, setNotCheck2] = useState(true);
  const [checked3, setCheck3] = useState(false);
  const [notchecked3, setNotCheck3] = useState(true);
  const [checked4, setCheck4] = useState(false);
  const [notchecked4, setNotCheck4] = useState(true);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    setComponent((prevStep) => prevStep + 1);

    if (activeStep == 1) {
      setCheck1(true);
      setNotCheck1(false);
    }

    if (activeStep == 2) {
      setCheck2(true);
      setNotCheck2(false);
    }

    if (activeStep == 3) {
      setCheck3(true);
      setNotCheck3(false);
    }

    if (activeStep == 4) {
      setCheck4(true);
      setNotCheck4(false);
    }
  };

  // Component Array
  const components = [
    <Form1 onChildEvent={handleNext} />,
    <Form2 onChildEvent={handleNext} />,
    <Form3 onChildEvent={handleNext} />,
    <Form4 />,
  ];

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
            {/* Stepper for mobile screen */}
            <div className="mb-4 pt-[4px] inactivestep md:hidden text-center justify-center">
              {activeStep}
            </div>

            {/* Stepper for medium screens  */}
            <div className="hidden justify-center mb-8 md:flex">
              <div className={activeStep > 1 ? "activestep" : "inactivestep"}>
                {notchecked1 && (
                  <img
                    src={notcheckedimg}
                    alt="My Image"
                    className="checkedimg"
                  />
                )}
                {checked1 && (
                  <img src={checkedimg} alt="My Image" className="checkedimg" />
                )}
              </div>

              {/* horizontal line */}
              <div
                className={activeStep >= 2 ? "activeline1" : "inactivestepper"}
              ></div>
              <div className={activeStep >= 3 ? "activestep1" : "inactivestep"}>
                {checked2 && <img src={checkedimg} className="checkedimg" />}
                {notchecked2 && (
                  <img src={notcheckedimg} className="notcheckedimg" />
                )}
              </div>
              {/* horizontal line */}
              <div
                className={activeStep >= 3 ? "activeline2" : "inactivestepper"}
              ></div>

              <div className={activeStep >= 4 ? "activestep2" : "inactivestep"}>
                {checked3 && <img src={checkedimg} className="checkedimg" />}
                {notchecked3 && (
                  <img src={notcheckedimg} className="notcheckedimg" />
                )}
              </div>

              <div
                className={activeStep >= 4 ? "activeline3" : "inactivestepper"}
              ></div>

              <div className={activeStep >= 5 ? "activestep3" : "inactivestep"}>
                {checked4 && <img src={checkedimg} className="checkedimg" />}
                {notchecked4 && (
                  <img src={notcheckedimg} className="notcheckedimg" />
                )}
              </div>
            </div>

            {/* Render Forms */}

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
            {components[activeComponent]}

            <main></main>
          </div>
        </div>
        <div className="background col-span-1 "></div>
      </div>
    </div>
  );
}

export default SignUp;
