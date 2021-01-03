import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import addFriend from './actions/addFriend';
import removeFriend from './actions/removeFriend';


function App() {

  const dispatch= useDispatch();
  const friends= useSelector(state=>[state.friends]);

  return (
    <div className="App">
      Hello

      <h1>{friends}</h1>
      <button onClick={()=>dispatch(addFriend('reaml'))}>Add friend</button><br></br><br></br>
      <button onClick={()=>dispatch(removeFriend())}>Remove friend</button>
    </div>
  );
}

export default App;

