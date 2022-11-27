import React from "react";

const ContactUs = () => {
    let title = 'Contact Us';

    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>
            <div align = "center">
            <div className="col-lg-6 pe-lg-5">
                <p>For more information, contact using any of the following-</p>
                <p><i className="fa fa-map-marker-alt me-2"></i>281 W Lane Ave, Columbus, OH 43210</p>
                <p><i className="fa fa-phone-alt me-2"></i>+1800 292 4312</p>
                <p><i className="fa fa-envelope me-2"></i>info@osudata.com</p>
            </div>
            </div>
        </>
    )

}
export default ContactUs;