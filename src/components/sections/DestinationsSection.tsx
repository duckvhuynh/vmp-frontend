export function DestinationsSection() {
  const destinations = [
    // First row
    [
      { name: 'Cape Town, South Africa', image: '/images/destinations/cape-town.jpg' },
      { name: 'Sydney, Australia', image: '/images/destinations/sydney.jpg' },
      { name: 'Tokyo, Japan', image: '/images/destinations/tokyo.jpg' },
      { name: 'Paris, France', image: '/images/destinations/paris.jpg' },
    ],
    // Second row
    [
      { name: 'London, UK', image: '/images/destinations/london.jpg' },
      { name: 'Dubai, UAE', image: '/images/destinations/dubai.jpg' },
      { name: 'Morocco, North Africa', image: '/images/destinations/morocco.jpg' },
      { name: 'Rio de Janeiro, Brazil', image: '/images/destinations/rio.jpg' },
    ],
  ];

  return (
    <section className="bg-white px-4 py-5 lg:px-48">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 space-y-8 text-center">
          <h2 className="font-playfair text-[52px] leading-[0.85] font-normal text-[#022926] uppercase">
            Destinations
          </h2>
          <p className="font-raleway mx-auto max-w-4xl text-xl leading-[1em] font-normal text-black">
            Book a private transfer at over 400 airports, stations and ports worldwide.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="space-y-5">
          {destinations.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col justify-center gap-5 lg:flex-row">
              {row.map((destination, index) => (
                <div
                  key={index}
                  className="group relative h-[272px] w-full cursor-pointer overflow-hidden rounded-[20px] lg:w-[272px]"
                >
                  {/* Background Image with Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url('${destination.image}')`,
                    }}
                  />

                  {/* Destination Name */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center">
                    <h3 className="font-athiti flex h-[22px] w-[190px] items-center justify-center text-sm leading-[1.43] font-bold text-white">
                      {destination.name}
                    </h3>
                  </div>

                  {/* Hover Effect */}
                  <div className="bg-opacity-0 group-hover:bg-opacity-20 absolute inset-0 bg-black transition-all duration-300" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
