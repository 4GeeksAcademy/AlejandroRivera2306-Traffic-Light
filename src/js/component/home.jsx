import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [oneColor,setOneColor]= useState('rgb(168, 54, 54)')
	const [twoColor,setTwoColor]= useState('rgb(188, 188, 77)')
	const [threeColor,setThreeColor]= useState('rgb(79, 166, 79)')


	function onecolor(){
		if(oneColor == 'rgb(168, 54, 54)'){
			setOneColor('rgb(255, 0, 0)')

		}else {

			setOneColor('rgb(168, 54, 54)')
		}
			// setOneColor('gray')
			//apagar boton 2 y tres 
			setTwoColor('rgb(188, 188, 77)')
			setThreeColor('rgb(79, 166, 79)')
	};

	function twocolor(){
		if(twoColor == 'rgb(188, 188, 77)'){
			setTwoColor('rgb(255, 255, 0)')

		}else {

			setTwoColor('rgb(188, 188, 77)')
		}
		//apagar boton 1 y tres
			setOneColor('rgb(168, 54, 54)')
			setThreeColor('rgb(79, 166, 79)')

			//setTwoColor('gray')
	};

	function threecolor(){
		if(threeColor == 'rgb(79, 166, 79)'){
			setThreeColor('rgb(3, 245, 3)')

		}else {

			setThreeColor('rgb(79, 166, 79)')
		}
		//apagar boton 1 y dos 
		setOneColor('rgb(168, 54, 54)')
		setTwoColor('rgb(188, 188, 77)')

			//setThreeColor('gray')
	};



	return (
	<div className="contenedor">
		<button className="semaforo" style={{backgroundColor: oneColor}} onClick={onecolor}></button>
    	<button className="semaforo" style={{backgroundColor: twoColor}} onClick={twocolor}></button>
		<button className="semaforo" style={{backgroundColor: threeColor}} onClick={threecolor}></button>
	</div>
	

	
	);
};

export default Home;
