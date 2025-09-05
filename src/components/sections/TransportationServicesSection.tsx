export function TransportationServicesSection() {
  const services = [
    // First row
    [
      {
        icon: '/images/icons/airport-transfers.jpg',
        title: 'Airport Transfers',
        description: 'Begin and conclude your travels with effortless, stress-free transfers, ensuring a seamless journey between the airport and your destination.',
      },
      {
        icon: '/images/icons/hourly-chauffeur.jpg',
        title: 'Hourly Chauffeur Service',
        description: 'Enjoy the luxury of a dedicated chauffeur at your service, whether for important business engagements, exclusive shopping excursions, or tailored sightseeing experiences-allowing you to move with effortless elegance throughout your day.',
      },
      {
        icon: '/images/icons/corporate-transport.jpg',
        title: 'Corporate Transportation',
        description: 'Make a lasting impression on clients and provide exceptional care for your team with our reliable, professional corporate transportation services, complemented by personalized account management for a seamless, refined experience.',
      },
    ],
    // Second row
    [
      {
        icon: '/images/icons/event-transport.jpg',
        title: 'Event Transportation',
        description: 'Whether for weddings, galas, or corporate events, ensure your guests experience unparalleled elegance with meticulously coordinated transportation services that elevate every occasion.',
      },
      {
        icon: '/images/icons/concierge.jpg',
        title: 'Concierge Services',
        description: 'Elevate your journey with our bespoke concierge services, thoughtfully managing every detail from exclusive restaurant reservations to securing premium event tickets, ensuring a flawless and unforgettable',
      },
      {
        icon: '/images/icons/long-distance.jpg',
        title: 'Long-Distance Transfers',
        description: 'Journey between cities in unparalleled comfort and privacy, effortlessly bypassing the inconveniences of public transport for a seamless, luxurious travel experience.',
      },
    ],
  ];

  return (
    <section className="bg-white px-4 py-8 lg:px-48">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-6 space-y-8 text-center">
          <h2 className="font-playfair text-[52px] leading-[0.85] font-normal text-[#022926] uppercase">
            Bespoke Transportation Experiences
          </h2>
          <p className="font-raleway mx-auto max-w-4xl text-xl leading-[1em] font-normal text-black">
            More than just airport transfers, VisitMauritiusParadies offers an array of meticulously crafted,
            premium services designed to elevate every aspect of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-5">
          {services.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {row.map((service, index) => (
                <div
                  key={index}
                  className="space-y-5 rounded-[20px] border-4 border-[#FCFCFC] bg-white p-5 transition-shadow hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="h-[98px] w-[100px] overflow-hidden rounded-2xl">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-raleway flex h-[30px] w-[300px] items-center text-[17px] leading-[1.76] font-medium text-black">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-raleway text-left text-sm leading-[1.43] font-normal text-black">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
