import DeleteButton from "./DeleteButton";

const Paragraph = ({content}) => (
    <p>
        {content}
        <DeleteButton></DeleteButton>
    </p>
);

export default Paragraph;