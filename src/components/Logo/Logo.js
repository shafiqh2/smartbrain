import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {

	return (
	
		<div className="ma4 mt0">
			<Tilt>				
				  <img alt='logo' className="Tilt" src={brain}/>
		    </Tilt>
		</div>
	
	);
}

export default Logo;