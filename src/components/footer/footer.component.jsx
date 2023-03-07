import './footer.styles.css';

const Footer = () => {
    return (
        <div className='bottom-footer'>
            <span className='year-color'> {new Date().getFullYear()} </span>
            <span className='email-color'>SALVADOR.FLORES.DEV</span>
        </div>
    );
};

export default Footer;
