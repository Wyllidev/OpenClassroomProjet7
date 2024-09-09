import React from 'react';
// Importe le hook useLocation de react-router-dom pour accéder à l'emplacement de l'URL
import { useLocation } from 'react-router-dom';
// Importe les composants Banner et Card
import Banner from '../components/Banner';
import Card from '../components/Card';
// Importe les données JSON des logements
import housings from '../assets/data/housings.json';

// Déclare le composant Home
export default function Home() {
	// Utilise le hook useLocation pour obtenir l'emplacement actuel de l'URL
	const housing = useLocation();

	return (
		<div>
			{/* Affiche la bannière */}
			<Banner location={housing} />
			{/* Conteneur pour afficher les cartes de logements */}
			<section className="cardsContainer">
				{/* Mappe à travers les données des logements et crée un composant Card pour chaque élément */}
				{housings.map((housing, index) => (
					// Affiche une carte de logement avec les données spécifiques
					<Card location={housing} key={index} />
				))}
			</section>
		</div>
	);
}
