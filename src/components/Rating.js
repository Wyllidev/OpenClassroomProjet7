import React from 'react';
// Importe l'image de l'étoile colorée
import starColor from '../assets/star_color.png';
// Importe l'image de l'étoile grise
import starGrey from '../assets/star_grey.png';

// Déclare le composant Rating qui prend "rating" comme propriété
function Rating({ rating }) {
	// Convertit la propriété "rating" en nombre entier
	const ratingNumber = parseInt(rating);
	// Crée un tableau de 5 étoiles, en utilisant les images appropriées en fonction de la note
	const stars = Array.from({ length: 5 }, (_, index) => (
		<img
		// Utilise l'index comme clé pour chaque image d'étoile
			key={index}
			// Sélectionne l'image colorée ou grise en fonction de la note
			src={index < ratingNumber ? starColor : starGrey}
			// Définit le texte alternatif pour l'accessibilité
			alt={index < ratingNumber ? 'star' : 'empty-star'}
		/>
	));

	// Affiche les étoiles dans un conteneur avec la classe CSS "ratingStars"
	return <div className="ratingStars">{stars}</div>;
}

// Exporte le composant Rating pour pouvoir l'utiliser dans d'autres fichiers
export default Rating;
