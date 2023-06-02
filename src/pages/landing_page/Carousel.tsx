
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Carousel() {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <div className='px-4'>
<Slider {...settings}>
      <div className='mx-auto'>
        <div className='md:w-[700px] px-4 commentouterbox mx-auto block text-justify'>
            <div className=' mt-[28px]'>
            Lorem ipsum dolor sit amet consectetur. Mi turpis id tempus ut sapien dis venenatis aliquam. Elit lobortis in eleifend mattis eu suspendisse eu eu. Amet aliquet mus quis amet cras tellus pulvinar eget odio. A sit vitae diam dignissim cum ac hendrerit gravida purus. Malesuada ornare a pellentesque morbi consectetur vitae. Lectus risus scelerisque mauris aliquam volutpat vestibulum. Quis aenean dictum eget accumsan leo arcu risus. Mi mattis nibh in integer cursus magna eu.
            
            <div className='mt-[60px] mb-[4px] text-center font-bold cardtitle'>
            Beod Wilson 
            </div>

            <div className='text-center'>
            Sierra Leone
            </div>
            </div>
        </div>
      </div>
      <div className='mx-auto'>
        <div className='md:w-[700px] px-4 commentouterbox mx-auto block text-justify'>
            <div className=' mt-[28px]'>
            Lorem ipsum dolor sit amet consectetur. Mi turpis id tempus ut sapien dis venenatis aliquam. Elit lobortis in eleifend mattis eu suspendisse eu eu. Amet aliquet mus quis amet cras tellus pulvinar eget odio. A sit vitae diam dignissim cum ac hendrerit gravida purus. Malesuada ornare a pellentesque morbi consectetur vitae. Lectus risus scelerisque mauris aliquam volutpat vestibulum. Quis aenean dictum eget accumsan leo arcu risus. Mi mattis nibh in integer cursus magna eu.
            
            <div className='mt-[60px] mb-[4px] text-center font-bold cardtitle'>
            Beod Wilson 
            </div>

            <div className='text-center'>
            Sierra Leone
            </div>
            </div>
        </div>
      </div>
      
      <div className='mx-auto'>
        <div className='md:w-[700px] px-4 commentouterbox mx-auto block text-justify'>
            <div className=' mt-[28px]'>
            Lorem ipsum dolor sit amet consectetur. Mi turpis id tempus ut sapien dis venenatis aliquam. Elit lobortis in eleifend mattis eu suspendisse eu eu. Amet aliquet mus quis amet cras tellus pulvinar eget odio. A sit vitae diam dignissim cum ac hendrerit gravida purus. Malesuada ornare a pellentesque morbi consectetur vitae. Lectus risus scelerisque mauris aliquam volutpat vestibulum. Quis aenean dictum eget accumsan leo arcu risus. Mi mattis nibh in integer cursus magna eu.
            
            <div className='mt-[60px] mb-[4px] text-center font-bold cardtitle'>
            Beod Wilson 
            </div>

            <div className='text-center'>
            Sierra Leone
            </div>
            </div>
        </div>
      </div>
    </Slider>
        </div>
      
    );
  }
  
  export default Carousel;