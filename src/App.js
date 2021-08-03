import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return <>
    <NavBar />
    <ItemListContainer greeting = 'Bienvenido a ' name="Retro Studios"/>
  </>
}

export default App;
