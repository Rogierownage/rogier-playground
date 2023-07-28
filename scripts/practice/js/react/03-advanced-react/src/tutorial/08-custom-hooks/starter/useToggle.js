import { useState } from "react";

const useToggle = (initialValue) => {
    const [show, setShow] = useState(initialValue);
    const toggle = () => {setShow(!show)};

    return [show, toggle];
}

export default useToggle;