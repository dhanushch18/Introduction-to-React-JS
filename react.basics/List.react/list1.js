/* React Lists

In React, you will render lists with some type of loop.

The JavaScript map() array method is generally the preferred method.

*/

function Car(props) {
  return <li>I am a {props.brand }</li>;
}

function Garage(){
  const cars = ['Ford','BMW','Audi'];
  return (
    <>
    <h1>Who lives in my house?</h1>
    <ul>
      {cars.map((car) => <Car brand={car} />)}
      </ul>
      </>
  );

  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

