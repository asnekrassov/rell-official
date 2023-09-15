import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
const Carousel = () => (
  <AwesomeSlider
    media={[
      {
        source: './carousel-item-1-min.png',
      },
      {
        source: './carousel-item-2-min.png',
      },
      {
        source: './carousel-item-3-min.png',
      },
    ]}
    style={{
        height: "204px",
        width: "204px",
        left: "30%",
    }}
    organicArrows={false}
  />
);

export default Carousel;