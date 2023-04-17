import Title from "./Title";

const servicesData = [
    {
        icon: 'fa-wallet',
        title: 'Saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        icon: 'fa-tree',
        title: 'Endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        icon: 'fa-socks',
        title: 'Amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
];

const Services = () => (
    <section className="section services" id="services">
        <Title titleFirst="Our" titleSecond="services" />

        <div className="section-center services-center">
            {servicesData.map((service) => (
                <article key="service.title" className="service">
                    <span className="service-icon"><i className={'fas ' + service.icon + ' fa-fw'}></i></span>
                    <div className="service-info">
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-text">{service.text}</p>
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default Services;