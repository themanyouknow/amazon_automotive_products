import "./contact.scss";
import contactImage from '../../images/contact-us-page-1200x801.jpeg';

const Contact = () => {
  return (
    <div className="contact">
      <span>Phone number: 9167996387 (use phone number ONLY when email does not
      respond</span>
      <span>Email:artyomik.arturik@icloud.com)</span>
      <img src={contactImage} alt="" />
    </div>
  );
};

export default Contact;
