export function HeroSection() {
  return (
    <section className="bg-opacity-80 relative flex min-h-[511px] items-center justify-center bg-gradient-to-r from-[#022926] via-transparent to-[#022926]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(89deg, rgba(2, 41, 38, 1) 7%, rgba(2, 41, 38, 0) 40%, rgba(2, 41, 38, 0) 54%, rgba(2, 41, 38, 1) 66%), 
                           linear-gradient(rgba(2, 41, 38, 0.8), rgba(2, 41, 38, 0.8)), 
                           url('/images/hero-bg.jpg')`,
        }}
        suppressHydrationWarning
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-4 lg:flex-row" suppressHydrationWarning>
        {/* Hero Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/hero_car.jpg"
            alt="Luxury chauffeur service"
            className="h-[329px] w-[418px] rounded-[17px] object-cover"
          />
        </div>

        {/* Hero Text Content */}
        <div className="flex-1 space-y-7 px-5 py-8 text-center lg:text-left">
          {/* Tagline */}
          <p className="font-raleway text-xl leading-tight font-normal tracking-[0.2em] text-white uppercase">
            Your Premium Global Chauffeur Experience
          </p>

          {/* Main Heading */}
          <div className="space-y-8">
            <h1 className="font-arsenal inline-block border border-[#BCAA72] px-4 py-2 text-center text-5xl leading-[0.92] font-normal text-white uppercase">
              Luxury Ground Transportation in 350+ Cities Worldwide.
            </h1>
          </div>

          {/* Description */}
          <p className="font-raleway mx-auto max-w-md text-sm leading-[1.14] font-normal tracking-[0.2em] text-white lg:mx-0">
            Experience the simplicity of booking secure, private rides with VisitMauritiusParadies,
            ensuring seamless, luxurious travel wherever your journey takes you.
          </p>
        </div>
      </div>
    </section>
  );
}
