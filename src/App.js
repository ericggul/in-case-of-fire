
import './App.css';

function Main({color}) {

  var i = parseInt(color.toString(16),16);
  if(i<10){
    i = `0${i}`
  }
  var derivedColor = `#${i}${i}${i}`;

  return(
    <div className="main" style={{ backgroundColor: derivedColor}}>
      In case of fire use stairs unless otherwise instructed
    </div>
  )
}



function App() {
  function randomHex(){
    return parseInt(Math.floor(Math.random() * 60 + 20).toString(16),16);
  }
  const sxtnarray = new Array(100).fill(randomHex());

  return (
    <div className="App">
      {sxtnarray.map((j,i)=>(
        <Main key={i} color={i} />
      ))}
    </div>
  );
}

export default App;
