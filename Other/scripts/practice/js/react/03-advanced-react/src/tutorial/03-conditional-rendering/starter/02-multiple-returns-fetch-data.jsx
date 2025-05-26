import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
      setTimeout(async () => {
        const response = await fetch(url);
        const users = await response.json();

        setIsLoading(false);

        if (Math.random() > 0.5) {
          setIsError(true);

          return;
        }

        setUsers(users);

      }, 1000);
  }, []);

  if(isLoading){
    return <h2>Loading</h2>
  }

  if(isError){
    return <h2>Error</h2>
  }

  return <h2>Done</h2>;
};

export default MultipleReturnsFetchData;
