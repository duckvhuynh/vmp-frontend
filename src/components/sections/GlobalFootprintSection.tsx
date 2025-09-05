export function GlobalFootprintSection() {
  const regions = [
    {
      icon: '/images/north_america.jpg',
      title: 'North America',
      description: 'Premier service across all major cities and international airports',
      titleColor: '#022926',
    },
    {
      icon: '/images/europe.jpg',
      title: 'Europe',
      description: 'From the timeless elegance of London and Paris to the cultural capitals of Rome and Berlin',
      titleColor: '#FFFFFF',
    },
    {
      icon: '/images/caribbean.jpg',
      title: 'Caribbean',
      description: 'Luxe island escapes including Jamaica, the Bahamas, and beyond',
      titleColor: '#FFFFFF',
    },
    {
      icon: '/images/mexico.jpg',
      title: 'Mexico',
      description: 'From the vibrant energy of Mexico City to the coastal allure of Cancún and other resort destinations',
      titleColor: '#FFFFFF',
    },
    {
      icon: '/images/asia.jpg',
      title: 'Asia',
      description: 'Serving iconic global hubs such as Tokyo, Singapore, and Bangkok',
      titleColor: '#022926',
    },
  ];

  const stats = [
    {
      icon: '/images/icons/countries.jpg',
      number: '60+',
      label: 'Countries',
    },
    {
      icon: '/images/icons/cities.jpg',
      number: '350+',
      label: 'Cities',
    },
    {
      icon: '/images/icons/continents.jpg',
      number: '4',
      label: 'Continents',
    },
    {
      icon: '/images/icons/airports.jpg',
      number: '400+',
      label: 'Airports',
    },
  ];

  return (
    <section className="relative min-h-[1381px] bg-gradient-to-br from-[#0C4D47] to-[#022926] px-4 py-8 lg:px-48">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content Row */}
        <div className="mb-12 flex flex-col items-center justify-center gap-12 lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 space-y-7">
            {/* Header */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h2 className="font-raleway text-xl leading-[2.2] font-semibold tracking-[0.2em] text-white uppercase">
                  VisitMauritiusParadies:
                </h2>
                <h3 className="font-playfair text-[52px] leading-[1em] font-normal text-white uppercase">
                  Curated Luxury for the Modern Traveler.
                </h3>
                <p className="font-raleway text-base leading-[1.25] font-normal text-white">
                  Worldwide Service. Seamless Style. Unforgettable Arrivals.
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-[536px]">
              <p className="font-raleway text-sm leading-[1.43] font-normal text-white">
                Your life moves fast, your ride should match the energy. VisitMauritiusParadies offers luxury chauffeured
                transportation designed for those who value style, comfort, and a seamless travel experience wherever life
                takes them. Whether you're vlogging your next travel drop, arriving in style for an event, or just living
                your luxe lifestyle, VisitMauritiusParadies gets you there effortlessly with elegance, edge, and always on brand.
              </p>
              <br />
              <p className="font-raleway text-sm leading-[1.43] font-normal text-white">
                With a presence in over 350 cities across four continents, VisitMauritiusParadies delivers a seamless
                standard of luxury chauffeured service—no matter where your journey leads.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src="/images/global_office.jpg"
              alt="Global Office Buildings"
              className="h-[483px] w-[542px] rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Global Footprint Title */}
        <h2 className="font-playfair mb-8 text-center text-[52px] leading-[1.1] font-normal text-white uppercase">
          Our Global Footprint
        </h2>

        {/* World Map */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/world_map.jpg"
            alt="World Map showing our global presence"
            className="h-[333px] w-[881px] rounded-2xl object-cover"
          />
        </div>

        {/* Regions Grid */}
        <div className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {regions.map((region, index) => (
            <div key={index} className="space-y-3 text-center">
              {/* Icon */}
              <div className="mx-auto h-20 w-20 overflow-hidden rounded-2xl">
                <img
                  src={region.icon}
                  alt={region.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className="font-raleway text-2xl leading-[0.5] font-semibold tracking-[0.2em] uppercase"
                style={{ color: region.titleColor }}
              >
                {region.title}
              </h3>

              {/* Description */}
              <p className="font-raleway mx-auto max-w-[200px] text-center text-xs leading-[1.67] font-normal text-white">
                {region.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <p className="font-raleway mx-auto max-w-2xl text-center text-sm leading-[1.43] font-normal text-[#BEA967]">
          From the moment you're picked up to your final drop-off, we make every ride a moment worth sharing.
          Because with VisitMauritiusParadies, your journey is part of the story.
        </p>

        {/* Available Worldwide Badge */}
        <div className="absolute top-[719px] left-1/2 flex -translate-x-1/2 transform items-center gap-2">
          <img
            src="/images/logo_seal.jpg"
            alt="VMP Seal"
            className="h-[54px] w-[54px]"
          />
          <div className="rounded-[20px] bg-white px-5 py-3">
            <p className="font-raleway text-xl leading-[0.6] font-semibold tracking-[0.2em] text-[#022926] uppercase">
              Available Worldwide
            </p>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="absolute bottom-[827px] left-1/2 flex -translate-x-1/2 transform gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="w-[78px] space-y-3 text-center">
              {/* Icon */}
              <div className="mx-auto h-[48px] w-[49px] overflow-hidden rounded-2xl">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Number */}
              <h3 className="font-raleway text-2xl leading-[0.5] font-semibold tracking-[0.2em] text-[#022926] uppercase">
                {stat.number}
              </h3>

              {/* Label */}
              <p className="font-athiti text-xs leading-[1em] font-semibold tracking-[0.2em] text-[#022926] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
