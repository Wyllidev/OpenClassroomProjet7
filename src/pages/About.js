import React from 'react';
// Importe le hook useLocation de react-router-dom pour accéder à l'emplacement de l'URL
import { useLocation } from 'react-router-dom';
// Importe les composants Banner et Collapse
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
// Importe les données JSON de la page "À propos"
import aboutdata from '../assets/data/about.json';
import '../style/pages/About.css';

// Déclare le composant About
export default function About() {
	// Utilise le hook useLocation pour obtenir l'emplacement actuel de l'URL
	const location = useLocation();

	return (
		<div className='about'>
			{/* Affiche la bannière */}
			<Banner location={location} />
			{/* Conteneur pour afficher les sections */}
			<div className="aboutCollapse">
			{/* Mappe à travers les données JSON et crée un composant Collapse pour chaque élément */}
				{aboutdata.map((information, index) => {
					return (
						<Collapse
							// Titre de la section
							title={information.title}
							// Contenu de la section
							content={information.content}
							// Clé unique pour chaque composant Collapse
							key={`about${index}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
