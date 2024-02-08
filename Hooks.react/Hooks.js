
/* React Hooks

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

*/



function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
    <h1>My favorite color is {color}! </h1>
    <button type='button' id='button1'
    onClick={() => setColor("Blue")}>Blue</button>
    <button type='button' id='button2'
    onClick={() => setColor("Red")}>Red</button>
    <button type='button' id='button3'
    onClick={() => setColor("Yellow")}>Yellow</button>
    <button type='button' id='button4'
    onClick={() => setColor("Green")}>Green</button>

    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);



