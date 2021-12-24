import './App.css';
import Header from './Components/Header'
import Button from './Components/Button'

function App() {
  // const addStyles ={
  //   display:"flex",
  //   width:"90%",
  //   margin:"0px auto",
  //   marginTop: "60px",
  //   justifyContent:"space-between"
  // }

  return (
    <div className="App">
      <Header />
      <Button />

      {/* <div style={addStyles}>
        <LeftComponent />
        <RightComponent />
      </div> */}

    </div>
  );
}

export default App;
