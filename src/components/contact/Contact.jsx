import "./contact.scss";
import contactImage from "../../images/contact-us-page-1200x801.jpeg";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        Phone number: <a href="tel: +19166342397">(916) 634-2397</a> (use phone
        number ONLY when email does not respond
      </p>
      <span>
        Email:
        <a href="mailto: artyomik.arturik@icloud.com">
          artyomik.arturik@icloud.com
        </a>
        )
      </span>
      <img src={contactImage} alt="" />
    </div>
  );
};

export default Contact;
