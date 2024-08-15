// PortfolioComponent.jsx

import PantriLanding from '../assets/images/pantri-landing.jpeg'
import PantriProducts from '../assets/images/pantri-products.jpeg'

export default function PortfolioComponent() {
  return (
    <div
      id="portfolio"
      className="h-auto min-h-[600px] w-full flex flex-col items-center mb-12 md:mb-20 md:mt-24"
    >
      <h1 className="text-4xl lg:text-6xl font-semibold text-darkGray dark:text-primary mb-4 md:mb-10">
        Portfolio
      </h1>
      <div className="grid place-content-center lg:px-20 lg:grid-cols-2 gap-10">
        <img src={PantriLanding} alt="Pantri Landing Page" className={image} />
        <img src={PantriProducts} alt="Pantri Products" className={image} />
      </div>
    </div>
  )
}

// Tailwind Styles
const image = 'h-[16em] w-[22em] rounded-lg'
