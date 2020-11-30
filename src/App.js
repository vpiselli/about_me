import React, { useEffect } from 'react';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
	
	useEffect(() => {
		document.title = process.env.REACT_APP_TITLE;
	}, []);

	return (
		<div id="wrapper">

			<Main />
			<Footer />

		</div>
		
	);
}

export default App;
