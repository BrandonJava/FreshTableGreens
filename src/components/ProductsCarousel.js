import Carousel from 'react-bootstrap/Carousel';
import '../styles/ProductsCarousel.css'; // Adjust the path if needed

// Import images directly using ES6 imports
import governance from '../assets/governance.jpg';
import operations from '../assets/operations.jpg';
import planet from '../assets/planet.jpg';
import partners from '../assets/partners.jpg';
import community from '../assets/community.jpg';

function ProductsCarousel() {
  return (
    <div className="carousel-wrapper">
    <div className="carousel-container">
      <h2 className="products-header">Products and Services</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={governance}
            alt="Ethics"
          />
          <Carousel.Caption>
            <h3>Ethics</h3>
            <p>Learn about our approach to ethics.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={operations}
            alt="Operations"
          />
          <Carousel.Caption>
            <h3>Operations</h3>
            <p>See how we manage our operations.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={planet}
            alt="Planet"
          />
          <Carousel.Caption>
            <h3>Planet</h3>
            <p>Our efforts to preserve the environment.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={partners}
            alt="Partners"
          />
          <Carousel.Caption>
            <h3>Partners</h3>
            <p>Collaborating with partners for a sustainable future.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={community}
            alt="Community"
          />
          <Carousel.Caption>
            <h3>Community</h3>
            <p>Supporting communities where we operate.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default ProductsCarousel;
