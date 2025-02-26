import React from 'react';
import { createRoot } from 'react-dom/client';


const root = document.getElementById('root');

if (root) {
	createRoot(root).render(
		<h1>
			test main.tsx
		</h1>
	);
}