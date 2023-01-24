import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>{year} &#x24B8; Vishal Kashyap</p>
        </div>
    );
}

export default Footer;