import useToggle from './useToggle';

const ToggleExample = () => {
  const [textIsVisible, toggleText] = useToggle(true);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={() => toggleText()}>
        toggle
      </button>
      {textIsVisible && <h4>some stuff</h4>}
    </div>
  );
};

export default ToggleExample;
