 const Footer = () => {
    return (
            <div className="container">
                    <div className="customer">
                        <h3>Customer Service</h3>
                        <ul>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/delivery">Delivery</a></li>
                        <li><a href="/return">Returns</a></li>
                        <li><a href="/returns">Download Returns Form</a></li>
                        </ul>
                    </div>
                    <div className="info">
                        <h3>Information</h3>
                        <ul>
                        <li><a href="/cookies">Cookie Policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="help">
                        <h3>Need Help?</h3>
                        <p>hello@dancewear.com</p>
                        <p>Dancewear</p>
                        1 Summa Gardens, Mayleborne House, Fromage road,
                        Warrington, United Kingdom
                    </div>
            </div>
        
    )
}

export default Footer;