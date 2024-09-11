import "./about.scss";
import aboutImage from '../../images/R.jpg';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welcome to Amazon Automotive Products, where innovation meets excellence
        in the world of automotive solutions. Since 2024, we’ve been driven by
        a passion for redefining the automotive experience, blending
        cutting-edge technology with unparalleled expertise. Our journey began
        with a simple mission: to provide high-quality automotive services and
        products that enhance performance, safety, and overall driving
        enjoyment.
      </p>
      <img src={aboutImage} alt="About Amazon Automotive Products" />
    </div>
  );
};

export default About;
