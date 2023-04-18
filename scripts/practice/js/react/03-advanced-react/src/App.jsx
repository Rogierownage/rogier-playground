import Starter from './tutorial/01-useState/starter/02-useState-basics';

function App() {
  return (
    <div className='container'>
      <Starter startingCount={15} />
      <Starter />
    </div>
  );
}

export default App;
