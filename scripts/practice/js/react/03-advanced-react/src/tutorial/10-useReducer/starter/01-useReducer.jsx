import { useReducer } from 'react';
import { data } from '../../../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'removeItem': 
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.id),
      };
    case 'clearPeople': 
      return {...state, people: []};
    case 'resetPeople': 
      return {...state, people: data};
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, {people: data});

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => dispatch({type: 'removeItem', id})}>remove</button>
          </div>
        );
      })}
      { !!state.people.length && <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => dispatch({type: 'clearPeople'})}
      >
        clear items
      </button> }
      { state.people !== data && <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => dispatch({type: 'resetPeople'})}
      >
        reset items
      </button> }
    </div>
  );
};

export default ReducerBasics;
