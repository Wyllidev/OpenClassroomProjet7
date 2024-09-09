// Importe React et les hooks useState et useRef pour gérer l'état et les références
import React, { useState, useRef } from 'react';
// Importe les images des flèches pour ouvrir/fermer la section
import arrow_up from '../assets/arrow_up.png';
import arrow_down from '../assets/arrow_down.png';

import '../style/components/Collapse.css';

// Déclare le composant Collapse qui prend "title" et "content" comme propriétés
export default function Collapse({ title, content }) {
	// Déclare une variable d'état "isOpen" pour savoir si la section est ouverte ou fermée, initialisée à "false"
	const [isOpen, setIsOpen] = useState(false);
	// Crée une référence "contentRef" pour accéder à l'élément DOM du contenu de la section
	const contentRef = useRef(null);

	// Fonction qui inverse l'état d'ouverture/fermeture de la section
	const handleToggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div
			// Ajoute un événement de clic pour ouvrir/fermer la section
				onClick={handleToggleCollapse}
				// Applique une classe CSS conditionnelle en fonction de l'état "isOpen"
				className={`collapse ${isOpen ? 'open' : ''}`}
			>
				{/* Affiche le titre de la section */}
				<p>{title}</p>
				<img
				// Affiche l'image de flèche vers le haut ou le bas selon l'état
					src={isOpen ? arrow_down : arrow_up}
					// Définit l'attribut alt pour l'accessibilité
					alt={isOpen ? 'fermer' : 'ouvrir'}
				/>
			</div>
			{/* Affiche le contenu seulement si "isOpen" est vrai */}
			{isOpen && (
				<div
				// Attache la référence à l'élément de contenu
					ref={contentRef}
					// Applique une classe CSS conditionnelle pour le contenu (ajoute la classe open si IsOpen est vrai)
					className={`collapsible-content ${isOpen ? 'open' : ''}`}
				>
					{/* Affiche le contenu sous forme de liste */}
					<ul>{content}</ul>
				</div>
			)}
		</div>
	);
}
