// Importe la bibliothèque React et le hook useState
import React, { useState } from 'react';
// Importe les images des flèches de navigation
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';
import '../style/components/Gallery.css';

// Déclare le composant Gallery qui prend "imagesList" comme propriété
export default function Gallery({ imagesList }) {
	// Déclare une variable d'état "currentIndex" pour suivre l'index de l'image actuelle, initialisé à 0
	const [currentIndex, setCurrentIndex] = useState(0);
	// Récupère l'image de la liste en fonction de l'index actuel
	const currentImage = imagesList[currentIndex];

	// Fonction pour aller à l'image précédente
	const slideLeft = () => {
		setCurrentIndex(
			currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1,
		);
	};

	// Fonction pour aller à l'image suivante
	const slideRight = () => {
		setCurrentIndex(
			currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1,
		);
	};

	return (
		// Conteneur principal pour l'affichage de l'image
		<div className="descriptionHousings">
			{/* Affiche l'image actuelle */}
			<img src={currentImage} alt="Logement" className="imageHousings" />
			{/* Affiche les contrôles de navigation seulement s'il y a plus d'une image */}
			{imagesList.length === 1 ? null : (
				<div>
					{/* Bouton pour passer à l'image précédente */}
					<img onClick={() => slideLeft()} src={arrowLeft} alt="Précédente" />
					{/* Affiche l'index de l'image actuelle sur le nombre total d'images */}
					<p>
						{currentIndex + 1}/{imagesList.length}
					</p>
					{/* Bouton pour passer à l'image suivante */}
					<img onClick={() => slideRight()} src={arrowRight} alt="Suivante" />
				</div>
			)}
		</div>
	);
}
