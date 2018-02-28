import React from 'react';


export default class Box extends React.Component{
	constructor(){
		super();
		this.state = {
		size: 0
			
		}
	}



_handleClick(e){
	if( this.props.duckBoxGo == true ){
		e.preventDefault();
		e.persist();
		var z = e.target.id;
		const x = document.getElementById(z);
		let boxNum = parseInt(x.innerHTML, 10);


	
		let preMoveDuckPos =  this.props.netPos + this.props.duckLocation;
		/* decide where to put net from where it is plus which box was clicked */
		let position = this.props.netPos + boxNum;
	
		//this.props.changeNet(position, this.props.row);


		let duckMargin = 0;
		/* decide where to put net and duck if net goes over 1200 */
		if( position > 1200){
		console.log("position%1200 = " + position%1200);	
		 position = position  % 1200;
		 duckMargin = preMoveDuckPos - position; 
		}else{
			duckMargin = preMoveDuckPos - position;
		}

		
	
		
		let duckMarginPx = duckMargin + "px";
		let moveNum = position + "px";
		let row = this.props.row;

		this.props.setDuckRandom( duckMargin, row );
		this.props.changeNet( position, row );

//git remote add origin https://github.com/douganddeb3/React-App.git

        
		if( row == 0 && this.props.duckBoxGo == true ){	
	
			
			document.getElementById("first").style.marginLeft = moveNum;
			document.getElementById("firstDuck").style.marginLeft = duckMarginPx;

			
			if( duckMargin == -50 ){
			
				let tempTrans = "scale(1.8)";
				document.getElementById("firstDuck").style.transform = tempTrans;
				document.getElementById("first").style.marginLeft = 0;
				document.getElementById("firstDuck").style.marginLeft = "1000px";
			
				this.props.changeNet( 0, 0);
				this.props.setDuckRandom( 1000, 0 );
				this.props.duckStateChange(0);
				
				$('.totalDiv').append('<img id="bottomDuck" src="assets/images/duckBuck.jpg" alt="duckBuck" style={imgStyle} />');
			}
					
			
		}else if( row == 1 && this.props.duckBoxGo == true){
			document.getElementById("second").style.marginLeft = moveNum;
			document.getElementById("secondDuck").style.marginLeft = duckMarginPx;
			if( duckMargin == -50 ) {
				let tempTrans = "scale(1.8)";
				document.getElementById("secondDuck").style.transform = tempTrans;
				document.getElementById("second").style.marginLeft = 0;
				document.getElementById("secondDuck").style.marginLeft = "1000px";
				
				
				this.props.changeNet(0, 1 );
				this.props.setDuckRandom( 1000, 1 );
				this.props.duckStateChange(1);

				
				$('.totalDiv').append('<img id="bottomDuck" src="assets/images/duckBuck.jpg" alt="duckBuck" style={imgStyle} />');
			
			}	
		}else if( row == 2 && this.props.duckBoxGo == true) {
			document.getElementById("third").style.marginLeft = moveNum;
			document.getElementById("thirdDuck").style.marginLeft = duckMarginPx;
			if( duckMargin == -50){
				let tempTrans = "scale(1.8)";
				document.getElementById("thirdDuck").style.transform = tempTrans;
				document.getElementById("third").style.marginLeft = 0;
				document.getElementById("thirdDuck").style.marginLeft= "1100px";
				
				this.props.changeNet(0, 2 );
				this.props.setDuckRandom( 1000, 2 );
				this.props.duckStateChange(2);

				

				$('.totalDiv').append('<img id="bottomDuck" src="assets/images/duckBuck.jpg" alt="duckBuck" style={imgStyle} />');
			}
		}		
	}
}











	render(){
		var left = this.props.duckLocation + "px";
		var imgStyle = {
			marginLeft: left
		}
		var leftNetMarg = this.props.netPos;
		var netStyle = {
			marginLeft: leftNetMarg
		}


		

		return(

			<div >
			<div id="nav">
			<button id="fifty" onClick={ this._handleClick.bind(this) }>50</button>
			<button id="hundred" onClick={ this._handleClick.bind(this) }>100</button>
			<button id="twohundred" onClick={ this._handleClick.bind(this) }>200</button>
			<button id="fivehundred" onClick={ this._handleClick.bind(this) }>500</button>
			</div> 
			<div id="start">
			<span id={ this.props.spacerId } style={ netStyle}><img id="net" className="netClass" src="assets/images/netPic.jpg" />
			</span><img id={  this.props.duckPicProp } className="imgPreStart" src="assets/images/duckBuck.jpg" alt="duckBuck" style={imgStyle} /> 
			</div>
			</div>
		);	
	}
}
	

