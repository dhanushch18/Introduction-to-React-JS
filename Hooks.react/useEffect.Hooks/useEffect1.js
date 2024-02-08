
/*
React useEffect Hooks

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)
*/


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count +1);

    },1000);
  });

  return <h1>I have rendered {count} times...!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

