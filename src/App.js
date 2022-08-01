import './App.css';
import request from './requests';
import Row from './Row'

function App() {
  return (
    <div className="App">
      
      <h1>Hey Roy i am biilding netflix App</h1>
      <Row title = "NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending_Now" fetchUrl={request.fetchTrendingNow}/>

    </div>
  );
}

export default App;
