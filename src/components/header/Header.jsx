import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
        <HamburgerMenu />
        <h1>Welcome to Amazon Automotive Products</h1>
    </div>
  )
}

export default Header