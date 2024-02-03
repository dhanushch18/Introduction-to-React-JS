
function Car(props) {
  return <h1> I am a {props.brand.model}.</h1>
}

function Vehicle (){
  const carInfo = { name: "Tata", model: "Nexon"};
  return (
    <>
    <h2>It is an emotion</h2>
    <Car brand={ carInfo} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Vehicle />);
