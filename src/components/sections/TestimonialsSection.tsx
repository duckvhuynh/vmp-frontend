export function TestimonialsSection() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(\'/images/testimonials-bg.jpg\')',
        }}
      />

      {/* Content */}
      <section className="relative z-10 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/images/vmp-logo.jpg"
              alt="Visit Mauritius Paradise Logo"
              className="h-[74px] w-[525px] object-contain"
            />
          </div>

          {/* Section Title */}
          <h2 className="font-playfair mx-auto max-w-[801px] text-[52px] leading-[1em] font-normal text-white uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>
      </section>
    </div>
  );
}
