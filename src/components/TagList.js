import React from 'react';

// Déclare le composant TagList qui prend "tags" comme propriété
const TagList = ({ tags }) => {
	return (
		// Conteneur de la liste
		<ul>
			{/* Itère sur chaque tag dans le tableau "tags" et crée un élément de liste pour chacun */}
			{tags.map((tag, index) => (
				// Affiche chaque tag dans un élément de liste <li>, avec une clé unique basée sur l'index
				<li key={index}>{tag}</li>
			))}
		</ul>
	);
};

// Exporte le composant TagList pour pouvoir l'utiliser dans d'autres fichiers
export default TagList;
