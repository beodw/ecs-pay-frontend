import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import featurerow1 from "../../../assets/featurerow1.png";
import featurerow2 from "../../../assets/featurerow2.png";
import trpartners from "../../../assets/trpartners.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const router = useNavigate();

  const handleSignup = () => {
    router("/signup");
  };
  return (
    <div>
      <Navbar />

      {/* first section */}
      <div className="grid md:grid-cols-2">
        <div style={{ marginTop: "9.031rem", marginLeft:'125px' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: "48px" }}>
            Send and Receive Money abroad hassle free with ECS Pay
          </h1>
          <h1 className="text-gray-500" style={{ fontWeight:'bold', color:'', fontSize:'24px', marginTop:'1.75rem' }}>
            The trusted and affordable way to make international transfers from
            Africa
          </h1>

          <div className="flex mt-11">
            <input
              className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Email Here"
              style={{maxWidth:'24.188rem', height:'3rem', boxShadow:'0px 4px 4px rgba(166, 166, 166, 0.25)'}}
            />

            <button
              className="rounded-full base-btn hover:bg-black"
              style={{ maxWidth: "11.563rem", height: "3.125rem", marginLeft:'7px' }}
              onClick={handleSignup}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="text-gray-500 converterexchanger">
        <div>
        <span className="ml-7">
        You are sending
       </span>
       
       <select style={{maxWidth:'30rem', height:'3.75rem', borderColor:'black', color:'black'}} className="currencyinput mt-4 mx-auto block w-full px-4 py-2 pr-8 leading-tight border rounded-full appearance-none focus:outline-none focus:border-gray-500">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

        </div>

        <div className="flex justify-between my-5">
        <span className="ml-7">
        Exchange Rate
       </span>

       <span style={{marginLeft:'182px'}}>
        1 USD
       </span>
{/* 
icon */}
       <span>

       </span>

       <span style={{marginRight:'41.5px'}}>
        725 NGN
       </span>

        </div>

        <div className="flex justify-between my-5">
        <span className="ml-7">
        Transfer Fee
       </span>

       <span style={{marginRight:'155.5px'}}>
       2.5%
       </span>
        </div>

        <div className="flex justify-between my-5">
        <span className="ml-7">
        Transaction Time
       </span>

       <span style={{marginRight:'73.5px'}}>
       24 to 48 Hours
       </span>
        </div>

        <div className="my-5">
        <span className="ml-7">
        Estimated Amount to Receiver
       </span>

       <select style={{maxWidth:'30rem', height:'3.75rem', borderColor:'black', color:'black'}} className="currencyinput mt-4 mx-auto block w-full px-4 py-2 pr-8 leading-tight border rounded-full appearance-none focus:outline-none focus:border-gray-500">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
        </div>

        <div className="text-center">
        <button
              className="rounded-full base-btn hover:bg-black"
              style={{ maxWidth: "30.25rem", height: "3rem"}}
              
            >
              Proceed
            </button>
        </div>
        </div>
      </div>

      {/* secondsection */}
      <div className="text-center"
      style={{marginTop:'292px'}}>

        <div className="header mb-6" style={{fontWeight: 'bold',
fontSize: '32px'}}>
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

        <div className="exchange justify-between flex mx-auto gap-12" style={{width:'fit-content'}}>
        <button
              className="rounded-full base-btn hover:bg-black"
              style={{ maxWidth: "16.875rem", height: "3rem"}}
              
            >
              Receive Money
            </button>

            <button
              className="rounded-full base-btn hover:bg-black"
              style={{ maxWidth: "16.875rem", height: "3.125rem"}}
              
            >
              Send Money
            </button>
        </div>

      </div>


      {/* thirdsection */}

      <div className="text-center" style={{marginTop:'156px'}}>
      <div className="header mb-16" style={{fontWeight: 'bold',
fontSize: '32px'}}>
        Our Trusted Partners
        </div>

        <div className="trustedpartners">
        <img className="max-w-full h-auto mx-auto" src={trpartners} />
        </div>
      </div>

      {/* fourthsection */}
      <div>

      </div>

      {/* fifthsection */}
      <div>

      </div>

      {/* sixthsection */}
      <div>

      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
