import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';

function SocialMedia() {
    return (
        <div className="row">
            <a className="col" href="https://www.facebook.com/Wallacebatbosareis" target="_blank" without rel="noopener noreferrer"><FaFacebookF /></a>
            <a className="col" href="https://api.whatsapp.com/send?phone=5547991371927&text=Olá!" target="_blank" without rel="noopener noreferrer"><FaWhatsapp color="green"/></a>
        </div>
    );
}

export default SocialMedia;