import React from 'react';
const tempratures = ['kelvin', 'celsius', 'fahrenheit','rankine'];
const volumes = ['liters','tablespoons','cubic-inches','cups','cubic-feet','gallons'];
const conversions = {
  kelvincelsius: kelvinToCelsius,
  kelvinfahrenheit: kelvinToFahrenheit,
  kelvinrankine: kelvinToRanKine,
  celsiuskelvin: celsiusToKelvin,
  celsiusfahrenheit: celsiusToFahrenheit,
  celsiusrankine: celsiusToRankine,
  fahrenheitkelvin: fahrenheitToKelvin,
  fahrenheitcelsius: fahrenheitToCelsius,
  fahrenheitrankine: fahrenheitToRankine,
  rankinekelvin: rankineToKelvin,
  rankinecelsius: rankineToCelsius,
  rankinefahrenheit: rankineTofahrenheit,
  literstablespoons: litersToTableSpoons,
  'literscubic-inches': litersToCubicinches,
  literscups: litersToCups,
  'literscubic-feet': litersToCubicfeet,
  litersgallons: litersToGallons,
  tablespoonsliters: tableSpoonsToLiters,
  'tablespoonscubic-inches': tableSpoonsToCubicinches,
  tablespoonscups: tableSpoonsToCups,
  'tablespoonscubic-feet': tableSpoonsToCubicfeet,
  tablespoonsgallons: tableSpoonsToGallons,
  'cubic-inchesliters': cubicinchesToLiters,
  'cubic-inchestablespoons': cubicinchesToTableSpoons,
  'cubic-inchescups': cubicinchesToCups,
  'cubic-inchescubic-feet': cubicinchesToCubicfeet,
  'cubic-inchesgallons': cubicinchesToGallons,
  cupsliters: cupsToLiters,
  cupstablespoons: cupsToTableSpoons,
  'cupscubic-inches': cupsToCubicinches,
  'cupscubic-feet': cupsToCubicfeet,
  cupsgallons: cupsToGallons,
  'cubic-feetliters': cubicfeetsToLiters,
  'cubic-feettablespoons': cubicfeetsToTableSpoons,
  'cubic-feetcubic-inches': cubicfeetsToCubicinches,
  'cubic-feetcups': cubicfeetsToCups,
  'cubic-feetgallons': cubicfeetsToGallons,
  gallonsliters: gallonsToLiters,
  gallonstablespoons: gallonsToTableSpoons,
  'gallonscubic-inches': gallonsToCubicinches,
  gallonscups: gallonsToCups,
  'gallonscubic-feet': gallonsToCubicfeets,
};

// kelvin
function kelvinToCelsius(sourceValue) {
  return sourceValue - 273.15;
};

function kelvinToFahrenheit(sourceValue) {
  return (sourceValue * 9/5) - 459.67;
};

function kelvinToRanKine(sourceValue) {
  return (sourceValue * 9/5);
};

// celsius
function celsiusToKelvin(sourceValue) {
  return sourceValue + 273.15;
}

function celsiusToFahrenheit(sourceValue) {
  return (sourceValue * 9/5) + 32;
}

function celsiusToRankine(sourceValue) {
  return (sourceValue * 9/5) + 491.67;
}

//fahrenheit
function  fahrenheitToKelvin(sourceValue) {
  return (sourceValue + 459.67) / 1.8;
}

function fahrenheitToCelsius(sourceValue) {
  return (sourceValue - 32) / 1.8;
};

function fahrenheitToRankine(sourceValue) {
  return (sourceValue) + 459.67;
};

// rankine
function rankineToKelvin(sourceValue) {
  return sourceValue * 5/9;
};

function rankineToCelsius(sourceValue) {
  return ((sourceValue - 491.67)*5/9);
}

function rankineTofahrenheit(sourceValue) {
  return sourceValue - 459.67;
}

// liters
function litersToTableSpoons(sourceValue) {
  return sourceValue * 67.628;
}

function litersToCubicinches(sourceValue) {
  return sourceValue * 61.024;
}

function litersToCups(sourceValue) {
  return sourceValue * 4.227;
}

function litersToCubicfeet(sourceValue) {
  return sourceValue / 28.317;
}

function litersToGallons(sourceValue) {
  return sourceValue / 3.785;
}

// TableSpoons
function tableSpoonsToLiters(sourceValue) {
  return sourceValue / 67.628;
}

function tableSpoonsToCubicinches(sourceValue) {
 return sourceValue / 1.108;
}

function tableSpoonsToCups(sourceValue) {
  return sourceValue / 16;
}

function tableSpoonsToCubicfeet(sourceValue) {
  return sourceValue / 1915;
}

function tableSpoonsToGallons(sourceValue) {
  return sourceValue / 256;
}

// cubicinches
function cubicinchesToLiters(sourceValue) {
  return sourceValue / 61.024;
}

function cubicinchesToTableSpoons(sourceValue) {
  return sourceValue * 1.108;
}

function cubicinchesToCups(sourceValue) {
  return sourceValue / 14.438;
}

function cubicinchesToCubicfeet(sourceValue) {
  return sourceValue / 1728;
}

function cubicinchesToGallons(sourceValue) {
  return sourceValue * 0.0043;
}

//cups
function cupsToLiters(sourceValue) {
  return sourceValue / 4.227;
}

function cupsToTableSpoons(sourceValue) {
  return sourceValue * 16;
}

function cupsToCubicinches(sourceValue) {
  return sourceValue * 14.438;
}

function cupsToCubicfeet(sourceValue) {
  return sourceValue * 120;
}

function cupsToGallons(sourceValue) {
  return  sourceValue / 16;
}

//cubicfeets
function cubicfeetsToLiters(sourceValue) {
  return sourceValue * 28.317;
}

function cubicfeetsToTableSpoons(sourceValue) {
  return sourceValue * 1915;
}

function cubicfeetsToCubicinches(sourceValue) {
  return sourceValue * 1728;
}

function cubicfeetsToCups(sourceValue) {
  return sourceValue * 120;
}

function cubicfeetsToGallons(sourceValue) {
 return sourceValue * 7.481;
}

//gallons
function gallonsToLiters(sourceValue) {
  return sourceValue * 3.785;
}

function gallonsToTableSpoons(sourceValue) {
  return sourceValue * 256;
}

function gallonsToCubicinches(sourceValue) {
  return sourceValue * 231;
}

function gallonsToCups(sourceValue) {
  return sourceValue * 16;
}

function gallonsToCubicfeets(sourceValue) {
  return sourceValue / 7.481;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {numValue: '', fromUnitOfMeasure: '', toUnitOfMeasure: '', studentResponse: '', outpuut: ''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
   const name = event.target.name;
   this.setState({[name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    
    const {numValue,fromUnitOfMeasure,toUnitOfMeasure,studentResponse} = this.state;

    if (isNaN(numValue)) this.setState({output: 'Entered "input numerical value" is not a number'}); 
    else if (fromUnitOfMeasure === toUnitOfMeasure) {
      const result = Math.round(studentResponse*10)/10 === Math.round(numValue*10)/10 ? 'correct' : 'incorrect';
      this.setState({output: result});
    }
    else if (tempratures.indexOf(fromUnitOfMeasure.toLowerCase())!== -1 && tempratures.indexOf(toUnitOfMeasure.toLowerCase()) !== -1) {
      this.getAndCompareResult(numValue, fromUnitOfMeasure, toUnitOfMeasure, studentResponse);
    }
    else if(volumes.indexOf(fromUnitOfMeasure.toLowerCase()) !== -1 && volumes.indexOf(toUnitOfMeasure.toLowerCase()) !== -1) {
      this.getAndCompareResult(numValue, fromUnitOfMeasure, toUnitOfMeasure, studentResponse);
    }
    else {
      this.setState({output: 'inValid'});
    }
  }

  getAndCompareResult(numValue, fromUnitOfMeasure, toUnitOfMeasure, studentResponse) {
    const calculatedValue = conversions[`${fromUnitOfMeasure.toLowerCase()}${toUnitOfMeasure.toLowerCase()}`](Number(numValue));
    const result = Math.round(studentResponse*10)/10 === Math.round(calculatedValue*10)/10 ? 'correct' : 'incorrect';
    console.log(calculatedValue);
    this.setState({output: result});
  }

  render() {
    const {numValue,fromUnitOfMeasure,toUnitOfMeasure,studentResponse,output} = this.state;
    return (
      <div>
        <div>
          <label> Input Numerical Value: </label>
          <input name="numValue" value={numValue} placeholder='Enter Numerical Value'onChange={this.onChange}/>
        </div>
        <div>
          <label> Input Unit of Measure: </label>
          <input name="fromUnitOfMeasure" value={fromUnitOfMeasure} onChange={this.onChange}/>
        </div>
        <div>
          <label> Target Unit of Measure: </label>
          <input name="toUnitOfMeasure" value={toUnitOfMeasure} onChange={this.onChange}/>
        </div>
        <div>
          <label> Student Response Value: </label>
          <input name="studentResponse" value={studentResponse} onChange={this.onChange}/>
        </div>
          <button name="submit" disabled={(!numValue || !fromUnitOfMeasure || !toUnitOfMeasure || !studentResponse)} onClick={this.onSubmit}> Submit </button>
          <div> Output: {output} </div>
      </div>
    );
  }
}


export default App;
