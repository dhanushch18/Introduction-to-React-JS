
/* Ternary Operator
Another way to conditionally render elements is by using a ternary operator

*/

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
	return (
		<>
			{ isGoal ? <MadeGoal/> : <MissedGoal/> }
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);




