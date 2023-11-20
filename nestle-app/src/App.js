import React, { useRef, useEffect, useState } from 'react';

//Pages
import Home from './pages/Home';
import Productos from './pages/Productos';
import CocoaPlan from './pages/CocoaPlan';
import Historia from './pages/Historia';
import Promociones from './pages/Promociones';
import Spots from './pages/Spots';

//Components
import Menu from './components/menu';

function App() {
	const [percentScroll, setPercentScroll] = useState(0);
	const contentAppRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const sectionWidthPercentage = 20;

			let scrollPercentage = (contentAppRef.current.scrollLeft / contentAppRef.current.scrollWidth) * 100;
			const sectionIndex = Math.floor((scrollPercentage + sectionWidthPercentage / 2) / sectionWidthPercentage);

			const desiredPercentage = sectionIndex * sectionWidthPercentage;

			const transitionPercentage = (scrollPercentage - desiredPercentage) / sectionWidthPercentage;
			const nextSectionStart = (sectionIndex + 1) * sectionWidthPercentage;
			const correctPercentage = desiredPercentage + transitionPercentage * (nextSectionStart - desiredPercentage);

			setPercentScroll(correctPercentage);
		};

		contentAppRef.current.addEventListener('scroll', handleScroll);

		return () => {
			if (contentAppRef.current !== null)
			contentAppRef.current.removeEventListener('scroll', handleScroll);
		};
	}, []);

  return (
    <div className='content-app' ref={contentAppRef}>
		<div className="section" id='home'>
			<Home />
		</div>
		<div className="section" id='productos'>
			<Productos />
		</div>
		<div className="section" id='promociones'>
			<Promociones />
		</div>
		<div className="section" id='spots'>
			<Spots />
		</div>
		<div className="section" id='cocoaplan'>
			<CocoaPlan />
		</div>
		<div className="section" id='historia'>
			<Historia />
		</div>
		<Menu scroll={percentScroll} />
    </div>
  );
}

export default App;
