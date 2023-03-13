import logo from '../../images/Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" className="logo__img" />
        </div>
    )
}

export default Logo;
