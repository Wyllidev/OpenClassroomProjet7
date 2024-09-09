import React from 'react';
// Importe le composant Link depuis react-router-dom pour la navigation
import { Link } from 'react-router-dom';
import '../style/components/Card.css';

// Déclare le composant Card qui prend "location" comme propriété
export default function Card({ location }) {
	return (
		// Crée un lien vers la page du logement en utilisant l'ID du logement
		<Link to={'/fiche-logement/' + location.id} key={'' + location.id}>
			{/* Conteneur de l'article de la carte */}
			<article>
				{/* Affiche l'image de couverture du logement */}
				<img src={location.cover} alt={location.title} />
				{/* Affiche le titre du logement */}
				<h2>{location.title}</h2>
			</article>
		</Link>
	);
}
