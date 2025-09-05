import { SERVICES } from '@/constants/services';

export function ServicesSection() {
  return (
    <section className="bg-white px-4 py-8 lg:px-48">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-6 space-y-8 text-center">
          <h2 className="font-playfair text-[52px] leading-[0.85] font-normal text-[#022926] uppercase">
            Your Journey, Redefined with VisitMauritiusParadies.
          </h2>
          <p className="font-raleway mx-auto max-w-3xl text-xl leading-[1em] font-normal text-black">
            From first impression to final destination, experience refined travel designed for those who move with purpose and style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
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
      </div>
    </section>
  );
}
