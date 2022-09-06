import './App.css';
import './style.css';
import Header from './components/header';
import ItemList from './components/ItemList';



function App() {
  return (
    <div>
      <Header/>
      <main>
        <ItemList name='Los pollos hermanos'/>
      </main>
    </div>
  );
}

export default App;
