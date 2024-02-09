
/* React Context 

React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

*/


function Component1() {
  const [user, setUser] = useState("Ch17");

  return (
    <>
    <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2 ({user}) {
  return (
    <>
    <h1>Component2</h1>
    <Component3 user={user} />
    </>
  );
}


function Component3 ({user}) {
  return (
    <>
    <h1>Component3</h1>
    <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}


function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);


