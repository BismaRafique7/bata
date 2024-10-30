import './App.css';
import Greet from './component/greet'; // Import Greet component (capitalized)
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Greet /> {/* Use the Greet component (capitalized) */}
      <Welcome name="bisma"/>
    </div>
  );
}