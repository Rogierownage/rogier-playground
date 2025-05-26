import { useReducer } from 'react';
import { data } from '../../../data';
import { REMOVE_ITEM, CLEAR_PEOPLE, RESET_PEOPLE } from './actions.js'
import reducer from './reducer';

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, {people: data});

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => dispatch({ type: REMOVE_ITEM, payload: { id }})}>remove</button>
          </div>
        );
      })}
      { !!state.people.length && <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => dispatch({ type: CLEAR_PEOPLE })}
      >
        clear items
      </button> }
      { state.people !== data && <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => dispatch({ type: RESET_PEOPLE })}
      >
        reset items
      </button> }
    </div>
  );
};

export default ReducerBasics;
