import React from 'react';
// Importe l'image du logo en blanc
import white_logo from '../assets/white_logo.png';
import '../style/components/Footer.css';

// Déclare le composant Footer
export default function Footer() {
	return (
		<footer>
			{/* Affiche le logo en blanc */}
			<img src={white_logo} alt="Logo" />
			{/* Affiche le texte de copyright */}
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
