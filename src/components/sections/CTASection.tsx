export function CTASection() {
  return (
    <section
      className="relative flex min-h-[360px] items-center justify-center px-4 py-8 lg:px-48"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/cta-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto max-w-4xl space-y-5 text-center">
        {/* Main Heading */}
        <h2 className="font-playfair mx-auto max-w-[801px] text-[52px] leading-[1em] font-normal text-black uppercase">
          Ready to Embark on Your Next Adventure in Style?
        </h2>

        {/* Description */}
        <p className="font-athiti mx-auto max-w-[707px] text-sm leading-[1.43] font-normal text-black">
          Book your chauffeur service today and capture every moment of your seamless, luxurious journey-making
          your travel experience as unforgettable as the destinations you explore.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-5 pt-5 sm:flex-row">
          {/* Book A Ride Button */}
          <button className="font-raleway hover:bg-opacity-90 flex h-[48px] w-[144px] items-center justify-center rounded bg-[#BCAA72] px-6 py-3 text-sm leading-[1.43] font-medium text-white transition-all">
            Book A Ride
          </button>

          {/* Contact Us Button */}
          <button className="font-raleway flex h-[48px] w-[144px] items-center justify-center rounded border border-[#BCAA72] bg-white px-6 py-3 text-sm leading-[1.43] font-medium text-[#BCAA72] transition-all hover:bg-[#BCAA72] hover:text-white">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
