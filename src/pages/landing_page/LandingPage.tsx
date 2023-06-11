import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import featurerow1 from "../../../assets/featurerow1.png";
import featurerow2 from "../../../assets/featurerow2.png";
import trpartners from "../../../assets/trpartners.png";
import herooimage from "../../../assets/Table.png";
import websitecard from "../../../assets/websitecard.png";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/app/appSlice';

function LandingPage() {
  const router = useNavigate();

  const {user} = useSelector((state:any) => state.app);
  const dispatch = useDispatch();
  const handleSignup = () => {
    // router("/signup");
    
    dispatch(setUser(true))
     console.log(user)
  };

 
  return (
    <div>
      <Navbar />

      {/* first section */}
      <div className="grid md:grid-cols-2">
        <div className="md:ml-[125px]" style={{ marginTop: "9.031rem"}}>
          <h1 style={{ fontWeight: 'bold', fontSize: "48px" }}>
            Send and Receive Money abroad hassle free with ECS Pay
          </h1>
          <h1 className=" text-gray-500" style={{ fontWeight:'bold', color:'', fontSize:'24px', marginTop:'1.75rem' }}>
            The trusted and affordable way to make international transfers from
            Africa
          </h1>

          <div className=" md:flex mt-11 text-center">
            <input
              className=" w-[17rem] mb-3 md:mb-0 appearance-none border rounded-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline md:w-[24.188rem]"
              id="email"
              type="text"
              placeholder="Enter Email Here"
              style={{ height:'3rem', boxShadow:'0px 4px 4px rgba(166, 166, 166, 0.25)'}}
            />

            <button
              className="rounded-full base-btn hover:bg-black w-[15rem]  md:w-[11.563rem]"
              style={{ height: "3.125rem", marginLeft:'7px' }}
              onClick={handleSignup}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="text-gray-500 converterexchanger w-[20rem] h-[33.25rem] md:w-[32.75rem] md:h-[29.25rem]">
        <div>
        <span className="ml-7">
        You are sending
       </span>

       <select style={{ height:'3.75rem', borderColor:'black', color:'black'}} className=" w-[15rem] md:w-[30rem] currencyinput mt-4 mx-auto block px-4 py-2 pr-8 leading-tight border rounded-full appearance-none focus:outline-none focus:border-gray-500">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

        </div>

        <div className="flex justify-between my-5">
        <span className="ml-7">
        Exchange Rate
       </span>

       <span className="ml-[46px] md:ml[182px]">
        1 USD
       </span>
{/* 
icon */}
       <span>

       </span>

       <span className=" mr-0 md:mr-[41.5px]">
        725 NGN
       </span>

        </div>

        <div className="flex justify-between my-5">
        <span className="ml-7">
        Transfer Fee
       </span>

       <span className="mr-[86px] md:mr-[155.5px]">
       2.5%
       </span>
        </div>

        <div className="flex justify-between my-5">
        <span className="ml-7">
        Transaction Time
       </span>

       <span className="mr-[7px] md:mr-[73.5px]">
       24 to 48 Hours
       </span>
        </div>

        <div className="my-5">
        <span className="ml-7">
        Estimated Amount to Receiver
       </span>

       <select style={{ height:'3.75rem', borderColor:'black', color:'black'}} className="w-[15rem] md:w-[30rem] currencyinput mt-4 mx-auto block px-4 py-2 pr-8 leading-tight border rounded-full appearance-none focus:outline-none focus:border-gray-500">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
        </div>

        <div className="text-center">
        <button
              className="rounded-full base-btn hover:bg-black w-[15rem] md:w-[30.25rem]"
              style={{height: "3rem"}}
              
            >
              Proceed
            </button>
        </div>
        </div>
      </div>

      {/* secondsection */}
      <div className="text-center"
      style={{marginTop:'202px'}}>

        <div className="header mb-6 mx-auto" style={{fontWeight: 'bold',
fontSize: '32px', maxWidth:'907px'}}>
        ECS Pay the simplest and fastest way to send and receive money from Africa to the World
        </div>

        <div className="sectiontitle mb-12">
        Send Money to Family, Friends, Colleagues and Receive Money from them too
        </div>

        <div className="values" style={{marginBottom:'114px'}}>

          <div className="featurerow1 mb-6">
          <img className="max-w-full h-auto mx-auto" src={featurerow1} />
          </div>
          <div className="featurerow2">
          <img className="max-w-full h-auto mx-auto" src={featurerow2} />
          </div>

        </div>

        <div className="exchange justify-between md:flex mx-auto gap-12" style={{width:'fit-content'}}>
        <button
              className="rounded-full base-btn hover:bg-black w-[15rem] mb-3 md:w-[16.875rem] md:mb-0"
              style={{ height: "3rem"}}
              
            >
              Receive Money
            </button>

            <button
              className="rounded-full base-btn hover:bg-black w-[15rem] md:w-[16.875rem]"
              style={{ height: "3rem"}}
              
            >
              Send Money
            </button>
        </div>

      </div>


      {/* thirdsection */}

      <div className="text-center trustedpartners h-[auto] pt-[24px] bg-[#FBCC0580]" style={{marginTop:'156px'}}>
      <div className="header mb-16" style={{fontWeight: 'bold',
fontSize: '32px'}}>
        Our Trusted Partners
        </div>

        <div className="trustedpartners">
        <img className="max-w-full h-auto mx-auto" src={trpartners} />
        </div>
        <img className="max-w-full h-auto block mx-auto" src={websitecard} />
      </div>

      {/* fifthsection */}
      <div style={{marginTop:'96px'}}>
        <div className="header text-center">
          Contact Us
        </div>
      <div className="grid  md:grid-cols-2">
        <div>
        <img className=" w-[60%] md:max-w-full h-auto mx-auto" src={herooimage} />
        </div>

        <div>
        <div className="header mb-4 text-center" style={{marginTop:'56px'}}>
        Contact our support team
        </div>

        <div className="sectiontitle text-center md:text-justify mx-auto mb-10 md:w-[469px]">
        Our sales team always active to support you. Any kind of questions about to our product they can answer to you.
        </div>

        <form className="w-[380px] md:w-[485px] mx-auto">
        <div
                className="mb-4 flex justify-between gap-3"
              >
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="text"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div
                className="mb-4 flex justify-between gap-3"
              >
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Phone"
                />
              </div>
         
              <textarea
                  className=" appearance-none mb-5 border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Text"
                />

                <div
                className="flex items-center mb-5"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
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
                  I agree that ECS PAY may contact me at the email address or phone number above.
                </label>
              </div>

<div className="text-center">
<button className="base-btn  w-[15rem] md:w-[30.25rem]" type="button">
                  Submit
                </button>
</div>
              

        </form>
        </div>
      
      </div>
      </div>
      

{/* sixthsection */}
      <div className="slider">

      </div>

      {/* seventhsection */}
      <div className="faq" style={{marginTop:'144px'}}>
        <div className="header text-center">
        What Our Users are Saying
        </div>
      
      <div className="mt-[52px] px-[1rem]">
      <Carousel></Carousel>
      </div>
        

      </div>

      {/* eightsection */}
      <div className="mt-[96px]">
      <div className="header text-center">
        Frequently asked questions
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
