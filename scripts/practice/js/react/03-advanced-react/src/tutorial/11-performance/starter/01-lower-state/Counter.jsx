import { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);

    return (
        <button
            className='btn'
            onClick={() => setCount(count + 1)}
            style={{ marginBottom: '1rem' }}
        >
            count {count}
        </button>
    )
}