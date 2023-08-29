import { useGlobalContext } from "../context";

const DeleteButton = () => {
    const {name, setName} = useGlobalContext();

    return <button type="button" onClick={() => setName('')}>Delete {name}</button>
};

export default DeleteButton;