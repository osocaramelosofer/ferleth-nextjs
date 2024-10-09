import { HeroSection } from '@/components/hero-section'
import { PhraseSection } from '@/components/phrase-section'
import { ProductsSection } from '@/components/products-section'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PhraseSection />

      <ProductsSection />
    </main>
  )
}
