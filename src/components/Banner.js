// Importe la bibliothèque React
import React from 'react';
// Importe les styles CSS pour le composant Banner
import '../style/components/Banner.css';

// Définit un objet contenant les images et les textes associés pour chaque chemin de l'application
const bannerImages = {
	// Définition pour la page d'accueil
	'/': {
		// Chemin vers l'image de la page d'accueil
		image: require('../assets/home_pic.jpg'),
		// Texte à afficher pour la page d'accueil
		text: 'Chez vous, partout et ailleurs',
	},
	// Définition pour la page "À propos"
	'/a-propos': {
		image: require('../assets/about_pic.jpg'),
		text: '',
	},
};

// Déclare le composant Banner qui prend "location" comme propriété
export default function Banner({ location }) {
	// Récupère le chemin actuel de la page
	const currentPath = location.pathname;
	// Récupère l'image et le texte associés au chemin actuel
	const { image, text } = bannerImages[currentPath];

	return (
		// Définit la section de la bannière avec une classe CSS conditionnelle
		<section
			className={`banner ${currentPath === '/' ? '' : 'heightAboutBanner'}`}
		>
			{/* Affiche l'image correspondante */}
			<img src={image} alt="Bannière" />
			{/* Affiche le texte seulement si le chemin est la page d'accueil */}
			{currentPath === '/' && <h1>{text}</h1>}
		</section>
	);
}
