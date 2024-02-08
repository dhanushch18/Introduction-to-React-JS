
/*

Update State
To update our state, we use our state updater function.

We should never directly update state. Ex: color = "red" is not allowed.

*/



function FavoriteColor() {
  const [color, setColor] = useState();

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);



