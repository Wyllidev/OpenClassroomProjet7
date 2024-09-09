import React from 'react';
import '../style/pages/NotFound.css';
export default function NotFound() {
	return (
		<div className="error">
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<a href="/">Retournez sur la page d'accueil</a>
		</div>
	);
}
