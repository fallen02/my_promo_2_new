export function CTASection({
  title,
  dualtitle,
  description,
}: {
  title: string;
  dualtitle: string;
  description: string;
}) {
  return (
    <>
     <div className="mx-auto  pt-24 px-0 sm:px-6 ">
      <div className="relative isolate overflow-hidden  px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-5xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title} <span className="text-primary">{dualtitle}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/contact-us"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Us
          </a>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#ff9900" />
              <stop offset={1} stopColor="#cc6600" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
    </>
   
  );
}
