import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/components/Header.css';

// Déclare le composant Header
function Header() {
	return (
		// Conteneur principal du header avec la classe CSS "header"
		<div className="header">
			{/* Affiche le logo de l'application */}
			<img src={logo} alt="Logo" />
			{/* Conteneur pour la navigation */}
			<div className="nav">
				
				{/* Lien de navigation vers la page d'accueil */}
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}
				>
					Accueil
				</NavLink>
				
				{/* Lien de navigation vers la page "À Propos" */}
				<NavLink
					to="/a-propos"
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}
				>
					A Propos
				</NavLink>

				
			</div>
		</div>
	);
}

export default Header;
