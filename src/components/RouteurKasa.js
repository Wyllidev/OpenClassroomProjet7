import React from 'react';
// Importe les composants nécessaires de react-router-dom pour la gestion des routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importe les pages et autres composants utilisés
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Housings from '../pages/Housings';

// Déclare le composant RouterKasa qui configure les routes de l'application
export default function RouterKasa() {
	return (
		// Conteneur principal pour la gestion des routes
		<BrowserRouter>
		{/* Affiche l'en-tête */}
			<Header />
			{/* Conteneur pour les routes */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<About />} />
				<Route path="/fiche-logement/:id" element={<Housings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<div className="placeholder"></div>
			{/* Affiche le pied de page */}
			<Footer />
		</BrowserRouter>
	);
}
