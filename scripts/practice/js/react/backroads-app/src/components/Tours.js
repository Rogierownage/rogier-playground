import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';
import Title from './Title';

const tourData = [
    {
        image: tour1,
        date: 'august 26th, 2020',
        title: 'tibet Adventure',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'china',
        days: 6,
        price: 2100,
    },
    {
        image: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'indonesia',
        days: 11,
        price: 1400,
    },
    {
        image: tour3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'hong kong',
        days: 8,
        price: 5000,
    },
    {
        image: tour4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'kenya',
        days: 20,
        price: 3300,
    },
];

const Tours = () => (
    <section className="section" id="tours">
        <Title titleFirst="Featured" titleSecond="tours" />

        <div className="section-center featured-center">
            {tourData.map((tour)  => (
                <article key={tour.title} className="tour-card">
                    <div className="tour-img-container">
                        <img src={tour.image} className="tour-img" alt="" />
                        <p className="tour-date">{tour.date}</p>
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                            <h4>{tour.title}</h4>
                        </div>
                        <p>
                            {tour.description}
                        </p>
                        <div className="tour-footer">
                            <p>
                                <span><i className="fas fa-map"></i></span>{tour.location}
                            </p>
                            <p>{tour.days} days</p>
                            <p>from ${tour.price}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default Tours;