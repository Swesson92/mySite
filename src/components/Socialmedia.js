import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

function Socialmedia(){
    return( 

<div className="social-container">
    <a
        href="https://www.youtube.com/channel/UCTVRBrZVcraAzcWqRTchVTA/featured?view_as=subscriber"
        className="youtube social"
     >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
     </a>

<a
href="https://www.instagram.com/swesson92"
className="instagram social"
>
<FontAwesomeIcon icon={faInstagram} size="2x" />
</a> 

<a
href="https://github.com/Swesson92"
className="github social"
>
<FontAwesomeIcon icon={faGithub} size="2x" />
</a> 

</div>

    );
}


export default Socialmedia;