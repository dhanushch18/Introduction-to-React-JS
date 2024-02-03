
/* React Conditional Rendering 
if Statement
*/


function Missed(){
  return <h1>Missed..!</h1>;
}

function Scored(){
  return <h1>Goal..!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <Scored/>;

  }

  return <Missed />;
}

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

