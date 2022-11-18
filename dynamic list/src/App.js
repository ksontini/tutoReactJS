import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';
import ShoppingListHooks from './ShoppingListHooks';
function App() {
  return (
    <div className="App">
      <ShoppingList name="Seafood Spaghetti" />

      <hr></hr>
      <h1>With React hooks</h1>
      <ShoppingListHooks name="Seafood Spaghetti" />
    </div >
  );
}

export default App;
