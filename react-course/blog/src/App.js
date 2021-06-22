import './App.css';
import User from './User';
import MyUser from './MyUser'
import Op from './Op'


function App() {
  function Apple() {
    return (<div>Apple Component</div>)
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <User />
      <MyUser />
      {Apple()}
      {NavBarComp()}
      <Op />
    </div>
  );
}

function NavBarComp() {
  return (<div>This is Navbar Component</div>)
}

export default App;
