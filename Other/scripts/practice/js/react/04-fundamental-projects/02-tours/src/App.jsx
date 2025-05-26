import { useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import { useEffect } from "react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      
      setTours(await response.json());
    })();
  }, []);

  return <>
    {tours ? <Tours tours={tours}></Tours> : <Loading></Loading>}
  </>;
};
export default App;
