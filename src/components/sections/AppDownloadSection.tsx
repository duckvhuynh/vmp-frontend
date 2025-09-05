export function AppDownloadSection() {
  return (
    <section className="bg-white px-4 py-10 lg:px-48">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content Container */}
        <div
          className="flex flex-col items-center justify-between gap-14 rounded-[20px] bg-gradient-to-r from-[#9b1b8a79f827a351dc2f8e79d23963363088396f] to-transparent p-10 lg:flex-row lg:p-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.89), rgba(255, 255, 255, 0.89)), url('/images/app-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Title */}
            <h2 className="font-athiti text-xl leading-[1em] font-semibold tracking-[0.2em] text-black uppercase">
              Get the VisitMauritiusParadise App
            </h2>

            {/* Subtitle */}
            <h3 className="font-playfair max-w-lg text-[52px] leading-[1em] font-normal text-[#022926] uppercase">
              Enjoy benefits only available in our award-winning app
            </h3>

            {/* App Store Buttons */}
            <div className="flex flex-col gap-5 pt-2 sm:flex-row">
              {/* App Store */}
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="/images/app-store.jpg"
                  alt="Download on the App Store"
                  className="h-[38px] w-[126px] object-contain"
                />
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="/images/google-play.jpg"
                  alt="Get it on Google Play"
                  className="h-[38px] w-[128px] object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
