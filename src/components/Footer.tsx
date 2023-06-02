import hrline from '../../assets/hrline.png'
import whatsapp from '../../assets/whatsapp.png'
import linkedin from '../../assets/linkedin.png'
import fb from '../../assets/facebook.png'
import gram from '../../assets/gram.png'
import twitter from '../../assets/twitter.png'
import copyright from '../../assets/copyright.png'

import { Link } from "react-router-dom";
function Footer() {
    return <div className="bg-[#0A0A0B] mt-[72px]">

      <div className="grid md:grid-cols-5 md:flex md:justify-between">
<div className='md:ml-[124px] w-[201px]'>
  <div className="footer-title mt-[37px] mb-[16px] font-bold">
  ECS Pay
  </div>

  <div className="footer-title" style={{color:'white', fontSize:'16px'}}>
  ECS Pay the simplest and fastest way to send and receive money from Africa to the World
  </div>

</div>
<div className='w-[fit-content]'>
  <div className="footer-title mt-[37px] font-bold mb-[16px]">
  Product
  </div>

  <ul>
    <li>
      <Link to='#' className="footer-links">Send Money</Link>
    </li>
    <li>
      <Link to='#' className="footer-links">Receive Money</Link>
    </li>
    
  </ul>

</div>

<div className='w-[fit-content]'>
  <div className="footer-title mt-[37px] font-bold mb-[16px]">
  Company
  </div>

  <ul>
    <li>
      <Link to='#' className="footer-links">About Us</Link>
    </li>
    <li>
      <Link to='#' className="footer-links">Careers</Link>
    </li>
    <li>
      <Link to='#' className="footer-links">Partnership</Link>
    </li>
    <li>
      <Link to='#' className="footer-links">FAQs</Link>
    </li>
    
  </ul>

</div>

<div className='w-[fit-content]'>
  <div className="footer-title mt-[37px] font-bold mb-[16px]">
  Legal
  </div>

  <ul>
    <li>
      <Link to='#' className="footer-links">Privacy Policy</Link>
    </li>
    <li>
      <Link className="footer-links" to='#'>Terms of Services</Link>
    </li>
  </ul>

</div>
<div className='w-[fit-content]'>
  <div className="footer-title mt-[37px] font-bold mb-[16px]">
  Contact Us
  </div>

  <div className="flex gap-1">
  <img className="max-w-full h-auto mx-auto" src={whatsapp} />
  <img className="max-w-full h-auto mx-auto" src={fb} />
  <img className="max-w-full h-auto mx-auto" src={twitter} />
  <img className="max-w-full h-auto mx-auto" src={linkedin} />
  <img className="max-w-full h-auto mx-auto" src={gram} />
  </div>

</div>
<div>
  
</div>
<div>
  
</div>
<div>
  
</div>
      </div>

      <div className='mt-[97px]'>
      <img className="max-w-full h-auto mx-auto" src={hrline} />
      </div>

      <div className="flex justify-between mt-[31px] mx-auto w-[fit-content]">
      <div className="footer-links mr-[10.03px]">
      ECS Pay 2023
      </div>
      
      <div>
      <img className="max-w-full h-auto mx-auto" src={copyright} />
      </div>
      <div className="footer-links ml-[10.03px]">
      All Rights Reserved
      </div>
      </div>
      
    </div>;
  }
  
  export default Footer;