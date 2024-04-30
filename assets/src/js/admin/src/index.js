import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/* Main Component */
import './index.scss';
import EntryContent from './components/EntryContent';

ReactDOM.render(
	<BrowserRouter>
		<EntryContent />
	</BrowserRouter>,
	document.getElementById( 'elementify-blocks-settings' )
);
