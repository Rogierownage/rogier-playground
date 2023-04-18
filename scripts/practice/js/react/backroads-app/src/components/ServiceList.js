import Service from "./Service";
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

const ServiceList = () => (
    <section className="section services" id="services">
        <Title titleFirst="Our" titleSecond="services" />

        <div className="section-center services-center">
            {servicesData.map((service) => (
                <Service key={service.title} icon={service.icon} title={service.title} text={service.text} />
            ))}
        </div>
    </section>
);

export default ServiceList;