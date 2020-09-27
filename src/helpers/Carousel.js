import * as React from 'react'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tw from "twin.macro";
import "react-responsive-carousel/lib/styles/carousel.min.css";


// const MotionImg = motion.img;

const Image = tw.img`max-w-full w-96 relative z-20`;

const useWindowSize = () => {
  const [size, setSize] = React.useState([0, 0]);
  React.useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};


const images = [
  "https://res.cloudinary.com/tolulope-od/image/upload/e_improve,w_350,h_600,c_thumb,g_auto/v1598367140/trevor-cole-CWcAsKuhwy0-unsplash_vdmd17.jpg",
  "https://res.cloudinary.com/tolulope-od/image/upload/e_improve,w_350,h_600,c_thumb,g_auto/v1601139589/santi-vedri-O5EMzfdxedg-unsplash_forq9q.jpg",
  "https://res.cloudinary.com/tolulope-od/image/upload/e_improve,w_350,h_600,c_thumb,g_auto/v1601139160/jaredd-craig-HH4WBGNyltc-unsplash_vgzblr.jpg",
];
const SlideShow = () => {
  const [screenWidth] = useWindowSize();
  return (
    <div style={{ height: screenWidth < 400 ? '560px' : '600px' }}>
      <Carousel
        showThumbs={false}
        infiniteLoop width={screenWidth < 400 ? "320px" : "350px"}
        autoPlay
        showArrows={false}
        dynamicHeight={true}
      >
        <div>
          <Image src={images[0]} />

        </div>
        <div>
          <Image src={images[1]} />

        </div>
        <div>
          <Image src={images[2]} />

        </div>
      </Carousel>
    </div>
  )
}

export default SlideShow;
