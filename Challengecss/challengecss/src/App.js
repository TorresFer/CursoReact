import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const Cars = [
    {id: 1, name: "Ferrari", km: "100000"},
    {id: 2, name: "HB20", km: "100000"},
    {id: 3, name: "Gol", km: "100000"},
]

  return (
    <div className="App">
      <h1>CSS Modularizado</h1>
        <div className='car-container'> {Cars.map((car) => (
          <CarDetails 
            key={car.id}
            name={car.name}
            km={car.km}
          />
        ))}
        </div>
    </div>
  );
}

export default App;
