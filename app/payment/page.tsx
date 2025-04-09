import { CTASection } from "@/components/layout/sections/cta";
import Image from "next/image";
import logo from "@/app/logo.png";
import { ChevronRight, CircleCheckBig } from "lucide-react";
import { PaymentForm } from "@/components/paymentForm";
const CTADATA = {
  title: "Join Us on ",
  dualTitle: "Your Digital Journey",
  description:
    "Ready to see how we can transform your ideas into impactful results? Contact us today to discuss your project and discover how our expertise can drive your success.",
};
export default function PaymentPage() {
  return (
    <main>
      <div className="relative isolate -z-10">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-700">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary to-black opacity-30"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-primary tracking-tight  sm:text-5xl">
                  Payment
                </h1>
                <p className="text-lg text-gray-200">
                  Now, you’re just a few steps away from completing your payment
                  securely.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={300}
                      height={400}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      height={400}
                      width={300}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-15 lg:pt-28 mx-auto max-w-7xl flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-col gap-3 p-2">
          <Image src={logo} alt="Logo" height={150} width={150} />
          <p className="text-lg text-gray-300">
            Thank you for choosing MyPromo! We deliver exceptional services for
            Digital Marketing & Web Development to grow you high.
          </p>
          <p className="text-lg text-gray-300">
            Now, you’re just a few steps away from completing your payment
            securely.
          </p>
          <h2 className="text-2xl text-orange-600 mt-3 font-medium">
            Why Pay Online?
          </h2>
          <div className="pl-0 lg:pl-3 flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <CircleCheckBig className="text-orange-600/80 w-fit" />
              <p className="text-lg text-gray-300">
                Quick, easy, and hassle-free transactions
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CircleCheckBig className="text-orange-600/80 w-fit" />
              <p className="text-lg text-gray-300">
                Secure payment with Razorpay
              </p>
            </div>
            <div className="flex flex-row gap-2  items-center">
              <CircleCheckBig className="text-orange-600/80 w-fit" />
              <p className="text-lg text-gray-300">
                Instant confirmation and receipt
              </p>
            </div>
          </div>

          <h2 className="text-2xl text-orange-600 mt-3 font-medium">
            How to pay?
          </h2>
          <div className="pl-0 lg:pl-3 flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <CircleCheckBig className="text-orange-600/80" />
              <p className="text-lg text-gray-300">
                Fill in the required details.
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CircleCheckBig className="text-orange-600/80" />
              <p className="text-lg text-gray-300">
                Verify the amount before proceeding.
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CircleCheckBig className="text-orange-600/80" />
              <p className="text-lg text-gray-300">
                Choose your preferred payment method.
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <CircleCheckBig className="text-orange-600/80" />
              <p className="text-lg text-gray-300">
                Complete your payment securely.
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-200">
            Once the payment is successfully processed, you will receive a
            confirmation email along with the transaction details.
          </p>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl text-orange-600 mt-4 font-medium">
              Need Help?
            </h2>
            <p className="text-lg text-gray-300">
              If you face any issues or need assistance, please reach out to us
              at{" "}
              <a
                href="mailto:mypromofficial@gmail.com"
                className="text-orange-600 hover:text-orange-800"
              >
                mypromofficial@gmail.com
              </a>
              .
            </p>
          </div>
          <p className="text-lg text-gray-200">
            Your support and trust in our services mean the world to us. We look
            forward to delivering outstanding results for your business!
          </p>
          <p>
            <a href="/terms-and-conditions" className="text-orange-600">Terms & conditions </a>
            |  
            <a href="/privacy-policy" className="text-orange-600"> privacy policy </a> 
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <div className="bg-card p-6 rounded-xl mt-10">
            <PaymentForm />
          </div>
          
        </div>
      </section>

      <CTASection
        title={CTADATA.title}
        description={CTADATA.description}
        dualtitle={CTADATA.dualTitle}
      />
    </main>
  );
}
