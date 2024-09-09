import React, { useEffect } from 'react';
// Importe les hooks useParams et useNavigate de react-router-dom pour accéder aux paramètres d'URL et naviguer entre les pages
import { useParams, useNavigate } from 'react-router-dom';
// Importe les données JSON des logements
import data from '../assets/data/housings.json';
// Importe les composants pour l'affichage des notes (avec les étoiles), des collapses, du carroussel, et de la liste de tags
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import TagList from '../components/TagList';
import '../style/pages/Housings.css';

// Déclare le composant Housings
export default function Housings() {
	// Utilise le hook useParams pour obtenir les paramètres d'URL, comme l'id du logement
	const params = useParams();
	// Extrait l'identifiant du logement à partir des paramètres d'URL
	const id = params.id;
	// Utilise le hook useNavigate pour naviguer
	const navigate = useNavigate();
	// Recherche l'élément de données correspondant à l'id du logement
	const selectedItem = data.find(item => item.id === id);

	// Utilise useEffect pour vérifier si l'élément sélectionné existe
	useEffect(() => {
		// Si l'élément n'existe pas, redirige vers la page 404
		if (!selectedItem) {
			// Navigue vers la route wildcard qui affiche la page NotFound
			navigate('*');
		}
		// Déclenche l'effet lorsqu'il y a un changement de selectedItem ou navigate
	}, [selectedItem, navigate]);

	// Si l'élément sélectionné existe, affiche les détails du logement
	if (selectedItem) {
		// Déstructure les propriétés du logement sélectionné pour un accès facile
		const {
			pictures,
			title,
			location,
			host,
			tags,
			rating,
			description,
			equipments,
		} = selectedItem;

		return (
			// Conteneur principal de la page du logement
			<section className="housingsContent">
				{/* Affiche la galerie d'images du logement */}
				<Gallery imagesList={pictures} />

				<div className="titleLocationHostStars">
					<div className="titleLocation">
						<div>
							{/* Affiche le titre du logement */}
							<h1>{title}</h1>
							{/* Affiche la localisation du logement */}
							<p>{location}</p>
						</div>
						{/* Affiche la liste des tags du logement */}
						<TagList tags={tags} /> {}
					</div>
					<div className="hostStars">
						<div className="host">
							{/* Affiche le nom de l'hôte */}
							<p>{host.name}</p>
							{/* Affiche la photo de l'hôte */}
							<img src={host.picture} alt={host.name} />
						</div>
						{/* Affiche la note du logement sous forme d'étoiles */}
						<Rating rating={rating} />
					</div>
				</div>
				<div className="housingsCollapse">
					{/* Affiche un composant Collapse pour la description du logement */}
					<Collapse title="Description" content={description} />
					{/* Affiche un composant Collapse pour la liste des équipements du logement */}
					<Collapse
						title="Équipements"
						content={
							<ul>
								{/* Mappe sur les équipements pour afficher chaque élément dans une liste */}
								{equipments.map((equipment, index) => (
									// Affiche chaque équipement
									<li key={index}>{equipment}</li>
								))}
							</ul>
						}
					/>
				</div>
			</section>
		);
	}
}
