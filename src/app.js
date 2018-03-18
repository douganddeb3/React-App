import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/box-comp';


class GameBox extends React.Component{
  constructor(){
    super();
    this.state = {
      timer: 30.01,
      duckRandom: [ 0, 0, 0 ],
      ducksBoxGo: [ true, true, true ],
      netPosition: [ 0, 0, 0 ],
      duckTempMove: [ 0, 0, 0]
      };
  }




  _changeNetPosition( amount, row){
    let tempNet   = this.state.netPosition;
    let k = parseInt(row);
    tempNet[ k ] = amount;
    this.setState({ netPosition: tempNet });
  }


  _duckStateChange(stateFalse){
    let duckState = this.state.ducksBoxGo;
    for(let j = 0; j < 3; j++){
      if(j == stateFalse){
        duckState[j] = false;
      }else{
        duckState[j] = this.state.ducksBoxGo[j];
      }
    } 
    this.setState({ ducksBoxGo: duckState });
  }



  _setDuckRandom(amount, row){
    let ducks = this.state.duckRandom;
    let _row = parseInt(row);
    ducks[_row] = amount;
    this.setState( () => ({ duckRandom: ducks}));
  }


/********************************************************************************************************************/
  timerCountDown(){
 /* this.setState(() => ({
      timer: (this.state.timer - .01).toFixed(2)
    }));
*/

    let rulecss = this.getRule();
    
   console.log("net position is = " + this.state.netPosition);
   console.log("timer "+ this.state.timer );  
   console.log("duckTempMove = " + this.state.duckTempMove);
   console.log("duckRandom = " + this.state.duckRandom); 

      var duckFly = [];
  
 

    if( this.state.timer % 5 == 0){
     duckFly =  this.getDuckPositions();
     this.setState( () => ({ duckTempMove: duckFly }));
     
    } 



  if((this.state.timer - 1) % 5  == 0 ){
  //Math.floor((Math.random() * 20) ) * 50 ;
  
  rulecss.deleteRule("0%");
  rulecss.deleteRule("50%");
  rulecss.deleteRule("100%");
  

  rulecss.appendRule("0% { transform: translateX(0px);  }");
  let x = document.getElementById("firstDuck").style.marginLeft ;
  let x1 = parseInt(x);
  let amountToTranslate = 0;
  amountToTranslate = this.state.duckTempMove[0] - x1;
  let duckLinePos = this.state.netPosition[0] + this.state.duckRandom[0] + amountToTranslate;
  
  if( duckLinePos > 1200){
    let over2 = duckLinePos % 1200;
    amountToTranslate = over2 - ( this.state.netPosition[0] + this.state.duckRandom[0] ) ;
  }
  

  let newDuckState = this.state.duckRandom[0] + amountToTranslate;
  rulecss.appendRule(" 50% { transform: translateX(" + amountToTranslate/2 + "px); }");
  rulecss.appendRule(" 100% { transform: translateX(" + amountToTranslate + "px);} ");
  document.getElementById("firstDuck").className = "duckMove";



  let newDuckStateArr = [0,0,0];
  newDuckStateArr[0] = newDuckState;
  newDuckStateArr[1] = this.state.duckRandom[1];
  newDuckStateArr[2] = this.state.duckRandom[2];

  this._setDuckRandom( () => ( newDuckState, 0));

  this.setState( () => ({ duckRandom: newDuckStateArr }));

  
  }else if( ( this.state.timer - 3) % 5 == 0 ){
  rulecss.deleteRule("0%");
  rulecss.deleteRule("50%");
  rulecss.deleteRule("100%");

  rulecss.appendRule("0% { transform: translateX(0px);  }");
  let amountToTranslate2 = 0;
  amountToTranslate2 = this.state.duckTempMove[1] - this.state.duckRandom[1];
  let duckLinePos2 = this.state.netPosition[1] + this.state.duckRandom[1] + amountToTranslate2;
  
  if( duckLinePos2 > 1200){
    let over22 = duckLinePos2 % 1200;
    amountToTranslate2 = over22 - ( this.state.netPosition[1] + this.state.duckRandom[1] ) ;
  }

  let nextDuckMar = this.state.duckRandom[1] + amountToTranslate2;
  this._setDuckRandom( nextDuckMar, 1);
  let nextDuckMarArr = [0,0,0];
  nextDuckMarArr[0] = this.state.duckRandom[0];
  nextDuckMarArr[1] = nextDuckMar;
  nextDuckMarArr[2] = this.state.duckRandom[2];
  this.setState( () => ({ duckRandom: nextDuckMarArr }) );
  
  rulecss.appendRule(" 50% { transform: translateX(" + amountToTranslate2/2 + "px); }");
  rulecss.appendRule(" 100% { transform: translateX(" + amountToTranslate2 + "px);} ");
  document.getElementById("secondDuck").className = "duckMove";


  }else if( this.state.timer % 5 == 0){
  
  
    document.getElementById("firstDuck").className = "imgBegin";
    document.getElementById("secondDuck").className = "imgBegin";
    document.getElementById("thirdDuck").className = "imgBegin";

    let tempMargStyle = this.state.duckRandom[0] + "px";
    document.getElementById("firstDuck").style.marginLeft = tempMargStyle ;
    let tempMargStyle2 = this.state.duckRandom[1] + "px";
    document.getElementById("secondDuck").style.marginLeft = tempMargStyle2 ;
    let tempMargStyle3 = this.state.duckRandom[2] + "px";
    document.getElementById("thirdDuck").style.marginLeft = tempMargStyle3 ;
   
    }else if( (this.state.timer - 2) % 5 == 0){
  
  
    document.getElementById("firstDuck").className = "imgBegin";
    document.getElementById("secondDuck").className = "imgBegin";
    document.getElementById("thirdDuck").className = "imgBegin";

    let tempMargStyle = this.state.duckRandom[0] + "px";
    document.getElementById("firstDuck").style.marginLeft = tempMargStyle ;
    let tempMargStyle2 = this.state.duckRandom[1] + "px";
    document.getElementById("secondDuck").style.marginLeft = tempMargStyle2 ;
    let tempMargStyle3 = this.state.duckRandom[2] + "px";
    document.getElementById("thirdDuck").style.marginLeft = tempMargStyle3 ;
   
    }else if( ( this.state.timer - 4.5) % 5 == 0 ){
  rulecss.deleteRule("0%");
  rulecss.deleteRule("50%");
  rulecss.deleteRule("100%");

  rulecss.appendRule("0% { transform: translateX(0px);  }");
  let amountToTranslate2 = 0;
  amountToTranslate2 = this.state.duckTempMove[2] - this.state.duckRandom[2];
  let duckLinePos2 = this.state.netPosition[2] + this.state.duckRandom[2] + amountToTranslate2;
  
  if( duckLinePos2 > 1200){
    let over22 = duckLinePos2 % 1200;
    amountToTranslate2 = over22 - ( this.state.netPosition[2] + this.state.duckRandom[2] ) ;
  }

  let nextDuckMar = this.state.duckRandom[2] + amountToTranslate2;
  this._setDuckRandom( nextDuckMar, 2);
  let nextDuckMarArr = [0,0,0];
  nextDuckMarArr[0] = this.state.duckRandom[0];
  nextDuckMarArr[1] = this.state.duckRandom[1];
  nextDuckMarArr[2] = nextDuckMar;
  this.setState( () => ({ duckRandom: nextDuckMarArr }) );
  
  rulecss.appendRule(" 50% { transform: translateX(" + amountToTranslate2/2 + "px); }");
  rulecss.appendRule(" 100% { transform: translateX(" + amountToTranslate2 + "px);} ");
  document.getElementById("thirdDuck").className = "duckMove";


  }else if( (this.state.timer - 3.5) % 5 == 0){
  
  
    document.getElementById("firstDuck").className = "imgBegin";
    document.getElementById("secondDuck").className = "imgBegin";
    document.getElementById("thirdDuck").className = "imgBegin";

    let tempMargStyle = this.state.duckRandom[0] + "px";
    document.getElementById("firstDuck").style.marginLeft = tempMargStyle ;
    let tempMargStyle2 = this.state.duckRandom[1] + "px";
    document.getElementById("secondDuck").style.marginLeft = tempMargStyle2 ;
    let tempMargStyle3 = this.state.duckRandom[2] + "px";
    document.getElementById("thirdDuck").style.marginLeft = tempMargStyle3 ;
   
    }
    


    if(this.state.timer < 0){
      clearInterval(this.intervalId);
      document.getElementById('timerId').innerHTML = "Try Again";
      this.setState({ timer: 30.01});
      this.setState({ netPosition: [ 0, 0, 0]});
      let netClassesTimer = document.getElementsByClassName('net');
      while( netClassesTimer.length > 0){
        netClassesTimer[0].className = 'netClass';
      }
    let newDucPosAfterTimer = this.getDuckPositions();
    this.setState(() => ({ duckRandom: newDucPosAfterTimer }));  
    document.getElementById("firstDuck").className = "imgPreStart";
    document.getElementById("secondDuck").className = "imgPreStart";
    document.getElementById("thirdDuck").className = "imgPreStart";
    }
      
    
    this.setState(() => ({
      timer: (this.state.timer - .01).toFixed(2)
    }));
    this.tick();
    

  }


  getRule() {
      var cssRule;

      var rule;

      var ss = document.styleSheets;

      for (var i = 0; i < ss.length; ++i) {

          // loop through all the rules!

          for (var x = 0; x < ss[i].cssRules.length; ++x) {

              rule = ss[i].cssRules[x];

              if (rule.name == "duckMoveKeyFrame" && rule.type

                      == CSSRule.KEYFRAMES_RULE) {

                  cssRule = rule;
                // CSSKeyframesRule.name
              }

          }

      }return cssRule;

  }

  clickStop(){
    console.log("CLICK");
    console.log("END duckRandom + " + this.state.duckRandom);
    let stopId = this.intervalId;
    clearInterval(stopId);
    this.setState({ timer: 30.00});
  
    let netClassesStop = document.getElementsByClassName('net');
    netClassesStop[0].className = 'netClass';
    netClassesStop[1].className = 'netClass';
    netClassesStop[2].className = 'netClass';
    document.getElementById("firstDuck").className = "imgPreStart" ; // "imgPreStart";
    document.getElementById("secondDuck").className = "imgPreStart";
    document.getElementById("thirdDuck").className = "imgPreStart";
    let tempNet2 = [ 0, 0, 0 ];
    this.setState({ netPosition: tempNet2 });
    document.getElementById('timerId').innerHTML = "Play Duck Buck! Click Me!";
    //document.getElementById("firstDuck").className = 'duckMove';
  }



  getDuckPositions(reset){

    let duckFlock = [0,0,0];
    for(let i = 0; i < 3; i++){
      if (this.state.duckRandom[i] == 0 || this.state.ducksBoxGo[i] == true || reset == true){
      duckFlock[i] = Math.floor((Math.random() * 23) + 1) * 50 ;
        if(this.state.netPosition[i] + duckFlock[i] > 1200){
          let over = this.state.netPosition[i] + duckFlock[i] - 1200;
        
          duckFlock[i] = over - this.state.netPosition[i];
        
        
      }

      
    }
   }
   return duckFlock;
  
  // this.setState({ duckRandom: duckFlock });

  }

  
/*  */
  

 _handleSubmit(e){
    e.preventDefault();

    this.setState({duckRandom: [ 0, 0, 0 ],
    ducksBoxGo: [ true, true, true ]  });
    let newDuckPos = this.getDuckPositions(true);
    this.setState({ duckRandom: newDuckPos });

    document.getElementById('first').style.marginLeft = 0;
    document.getElementById('second').style.marginLeft = 0;
    document.getElementById('third').style.marginLeft = 0;
    
    let netClasses = document.getElementsByClassName('netClass');
    while( netClasses.length > 0){
    netClasses[0].className = 'net';
    }

    console.log("netClasses " + netClasses);
    document.getElementById('firstDuck').style = 'imgBegin';
    document.getElementById('secondDuck').style ='imgBegin';
    document.getElementById('thirdDuck').style = 'imgBegin'; 
    document.getElementById('net').style.marginLeft = 0; 
    

    this.intervalId = setInterval(this.timerCountDown.bind(this), 10);
    
  }


  tick(){
    const element = (
    <span>
      { "It's a Duck Off! " }
        { this.state.timer }
    </span>
  );
  ReactDOM.render(
    element,
    document.getElementById('timerId')
  );
  }



  render(){
  
    return(   
    <div className="totalDiv">
     
    <form onSubmit={ this._handleSubmit.bind(this) }>
      <button type="submit" id="timerId" >DUCK BUCK! CLICK TO START </button>
    </form><a onClick={ () => this.clickStop()} href="#">Stop</a>
    
    <Box setDuckRandom={ this._setDuckRandom.bind(this)} netPos={this.state.netPosition[0]} changeNet={this._changeNetPosition.bind(this) } duckStateChange= { this._duckStateChange.bind(this ) } duckBoxGo = { this.state.ducksBoxGo[0] } spacerId="first" duckPicProp="firstDuck"  duckLocation={ this.state.duckRandom[0] } row={0} />
    <Box setDuckRandom={ this._setDuckRandom.bind(this)} netPos={this.state.netPosition[1]} changeNet={this._changeNetPosition.bind(this) } duckStateChange= { this._duckStateChange.bind(this ) } duckBoxGo = { this.state.ducksBoxGo[1] } spacerId="second" duckPicProp="secondDuck" duckLocation={ this.state.duckRandom[1]} row={1} />
    <Box setDuckRandom={ this._setDuckRandom.bind(this)} netPos={this.state.netPosition[2]} changeNet={this._changeNetPosition.bind(this) } duckStateChange= { this._duckStateChange.bind(this ) } duckBoxGo = { this.state.ducksBoxGo[2] } spacerId="third" duckPicProp="thirdDuck" duckLocation={ this.state.duckRandom[2] } row={2} />
    
    </div>
    );
  }



  /*componentWillMount(){
    let duckFlock =[];
    for(let i = 0; i < 3; i++){
      if (this.state.duckRandom[i] == 0 || this.state.ducksBoxGo[i] ){
      duckFlock[i] = Math.floor((Math.random() * 23) + 1) * 50 ;
      }
    }
    this.setState({ duckRandom: duckFlock });
  }*/


  }





 ReactDOM.render(<GameBox />, document.getElementById("root"));

