import './App.css';
import TopBar from './components/TopBar'
import CardLogo from './components/CardLogo'
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <TopBar />
      <CardLogo />
      <StoreListings />
    </div>
  );
}

export default App;
