import Tour from "./Tour";

const Tours = ({tours}) => {
    return tours.map((tour) => <Tour key={tour.id} {...tour}></Tour>);
}

export default Tours;