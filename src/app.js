import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/box-comp';


class GameBox extends React.Component{
  constructor(){
    super();
    this.state = {
      timer: 30,
      duckRandom: [ 0, 0, 0 ],
      ducksBoxGo: [ true, true, true ],
      netPosition: [ 0, 0, 0 ]    
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


  timerCountDown(){
    this.setState({
      timer: (this.state.timer - .01).toFixed(2)
    });
    document.getElementById("firstDuck").className = "imgBegin";
    document.getElementById("secondDuck").className = "imgBegin";
    document.getElementById("thirdDuck").className = "imgBegin";
    
    
    if(this.state.timer < 0){
      clearInterval(this.intervalId);
      document.getElementById('timerId').innerHTML = "Try Again";
      this.setState({ timer: 30});
      this.setState({ netPosition: [ 0, 0, 0]});
      let netClassesTimer = document.getElementsByClassName('net');
      while( netClassesTimer.length > 0){
        netClassesTimer[0].className = 'netClass';
      }
    document.getElementById("firstDuck").className = "imgPreStart";
    document.getElementById("secondDuck").className = "imgPreStart";
    document.getElementById("thirdDuck").className = "imgPreStart";
    }
      
    //}
    if(this.state.timer % 5 == 0){
    
      this.getDuckPositions();
     // document.getElementById("firstDuck").className = "duckMove";
    }

    this.tick();
    this.getRule();

  }


  // var cssRule;

  // Returns a reference to the specified CSS rule(s).

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
                console.log("cssRule = " + cssRule.name);
                // CSSKeyframesRule.name
              }

          }

      }

  }


  /*
  cssRule.deleteRule("0");

  cssRule.deleteRule("1");

  cssRule.appendRule("0% { transform: translateY(-150px) "

      + scale +"; opacity: 0; }");

  cssRule.appendRule("100% { transform: translateY(0px) "

      + scale + "; opacity: 1; }");
  */
  

  clickStop(){
    console.log("CLICK");
    let stopId = this.intervalId;
    clearInterval(stopId);
    this.setState({ timer: 30});
  
    let netClassesStop = document.getElementsByClassName('net');
    netClassesStop[0].className = 'netClass';
    netClassesStop[0].className = 'netClass';
    netClassesStop[0].className = 'netClass';
    document.getElementById("firstDuck").className = "duckMove" ; // "imgPreStart";
    document.getElementById("secondDuck").className = "imgPreStart";
    document.getElementById("thirdDuck").className = "imgPreStart";
    let tempNet2 = [ 0, 0, 0 ];
    this.setState({ netPosition: tempNet2 });
    document.getElementById('timerId').innerHTML = "Play Duck Buck! Click Me!";
    //document.getElementById("firstDuck").className = 'duckMove';
  }



  getDuckPositions(reset){
    let duckFlock = this.state.duckRandom;
    for(let i = 0; i < 3; i++){
      if (this.state.duckRandom[i] == 0 || this.state.ducksBoxGo[i] == true || reset == true){
      duckFlock[i] = Math.floor((Math.random() * 23) + 1) * 50 ;
      if(this.state.netPosition[i] + duckFlock[i] > 1200){
        let over = this.state.netPosition[i] + duckFlock[i] - 1200;
        
        duckFlock[i] = over - this.state.netPosition[i];
        
        
      }
      
    }
   }
    this.setState({ duckRandom: duckFlock });

  }

  _setDuckRandom(amount, row){
    let ducks = this.state.duckRandom;
    let _row = parseInt(row);
    ducks[_row] = amount;
    this.setState({ duckRandom: ducks});
  }

  

 _handleSubmit(e){
    e.preventDefault();
   /* document.getElementById('firstDuck').style = "width:100px, height:100px";
    document.getElementById('secondDuck').style = "width:100px, height:100px";
    document.getElementById('thirdDuck').style = "width:100px, height:100px";
    */
    this.setState({duckRandom: [ 0, 0, 0 ],
    ducksBoxGo: [ true, true, true ]  });
    this.getDuckPositions(true);
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
    //let tempDuckLoc = this.state.duckRandom[0] + 'px';
    //5document.getElementById("firstDuck").style.marginLeft = tempDuckLoc;
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



  componentWillMount(){
    let duckFlock =[];
    for(let i = 0; i < 3; i++){
      if (this.state.duckRandom[i] == 0 || this.state.ducksBoxGo[i] ){
      duckFlock[i] = Math.floor((Math.random() * 23) + 1) * 50 ;
      }
    }
    this.setState({ duckRandom: duckFlock });
  }


  }





 ReactDOM.render(<GameBox />, document.getElementById("root"));

