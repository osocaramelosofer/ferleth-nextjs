/* eslint-disable @next/next/no-img-element */
import { HeroSection } from '@/components/hero-section'
import { PhraseSection } from '@/components/phrase-section'
import { ProductsSection } from '@/components/products-section'
import { GiEarthAmerica, GiEcology } from 'react-icons/gi'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PhraseSection />
      <ProductsSection />
      <section className="my-20">
        <div className="flex">
          <div className="flex gap-4 md:flex-row flex-col-reverse">
            <div className="w-full md:w-2/5 aspect-auto rounded-2xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI710938516003_alternate1?$rl_4x5_pdp$"
                alt="man image"
              />
            </div>
            <div className="w-full bg-[#789c49] rounded-2xl flex flex-col justify-between md:gap-y-40 gap-y-20 md:p-20 p-8">
              <div className="max-w-[500px]">
                <span className="font-rubik tracking-tighter text-2xl md:text-6xl leading-3 md:leading-normal white-space-normal overflow-wrap-break-word text-center">
                  we&#39;re changing the way things get made
                </span>
              </div>
              <div className="container-cards flex flex-col md:flex-row border-[2px] border-[#536f2f] rounded-xl p-4 gap-8 ">
                <div className="card1 flex-initial">
                  <div className="flex items-center">
                    <GiEcology className="text-4xl mr-2" />
                    <span className="font-rubik tracking-tighter text-xl">
                      sustainability
                    </span>
                  </div>
                  <p className="font-bold">
                    we&#39;re challenging conventional retail, putting and end
                    to dead stock, unconventional waste and more fantastic
                  </p>
                </div>
                <div className="card1 flex-initial">
                  <div className="flex items-center">
                    <GiEarthAmerica className="text-2xl mr-2" />
                    <span className="font-rubik tracking-tighter text-xl">
                      mission
                    </span>
                  </div>
                  <p className="font-bold">
                    we&#39;re on a mission to empower create independence in a
                    commercial world and incredible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
