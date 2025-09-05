export function VehicleFleetSection() {
  const services = [
    {
      icon: '/images/icons/meet-greet-dark.jpg',
      title: 'Complimentary Meet & Greet',
      description: 'Enjoy a seamless arrival as your professional chauffeur welcomes you at the terminal with a personalized sign, assists with your luggage, and escorts you to your waiting vehicle ensuring a graceful start to your journey.',
    },
    {
      icon: '/images/icons/luxury-fleet-dark.jpg',
      title: 'Luxury Fleet',
      description: 'Travel in uncompromising style with our curated selection of premium vehicles-from sleek sedans to executive minibuses- each offering exceptional comfort, sophistication, and performance for every journey.',
    },
    {
      icon: '/images/icons/transparent-pricing-dark.jpg',
      title: 'Transparent Pricing',
      description: 'Enjoy complete peace of mind with our all-inclusive, fixed-rate pricing. No hidden fees, no unexpected charges—just one upfront price that includes all taxes and gratuities. What you see is truly what you pay.',
    },
  ];

  return (
    <div className="relative">
      {/* Main Section */}
      <section className="relative z-10 bg-[#F8F8F8] px-4 py-8 lg:px-48">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-6 space-y-8 text-center">
            <h2 className="font-playfair text-[52px] leading-[0.85] font-normal text-[#022926] uppercase">
              Choose the Ideal Ride for Your Journey
            </h2>
            <p className="font-raleway mx-auto max-w-4xl text-xl leading-[1em] font-normal text-black">
              From solo explorations to group adventures, select the perfect vehicle to match your travel needs-
              ensuring every part of your journey is as memorable as the destination.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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
                <h3 className="font-raleway flex h-[30px] w-[300px] items-center text-[17px] leading-[1.76] font-bold text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-athiti text-left text-sm leading-[1.43] font-normal text-black">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Image Overlay */}
      <div
        className="absolute top-[214px] left-0 z-0 h-[605px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(\'/images/vehicle-fleet-bg.jpg\')',
        }}
      />
    </div>
  );
}
