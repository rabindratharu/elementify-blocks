import React from 'react';
import EnableBackground from '../components/extensions/EnableBackground';
import EnableBorder from '../components/extensions/EnableBorder';
import EnableMotionEffects from '../components/extensions/EnableMotionEffects';
import EnableTransform from '../components/extensions/EnableTransform';
import EnableWidth from '../components/extensions/EnableWidth';
import EnableSpacings from '../components/extensions/EnableSpacings';
import EnableDisplay from '../components/extensions/EnableDisplay';
import EnableCustomCSS from '../components/extensions/EnableCustomCSS';
import EnableLayoutOptions from '../components/extensions/EnableLayoutOptions';

export default function Main() {
	return (
		<>
			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3">
				<EnableLayoutOptions />
				<EnableBackground />
				<EnableBorder />
				<EnableMotionEffects />
				<EnableTransform />
				<EnableWidth />
				<EnableSpacings />
				<EnableDisplay />
				<EnableCustomCSS />
			</dl>
		</>
	);
}
