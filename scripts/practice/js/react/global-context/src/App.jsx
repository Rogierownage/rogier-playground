import './App.css'
import Paragraph from './components/Paragraph'
import { useGlobalContext } from './context';

function App() {
  const {name} = useGlobalContext();

  return (
    <div className="App">
      <Paragraph content={"Hello, " + name} />
    </div>
  )
}

export default App
