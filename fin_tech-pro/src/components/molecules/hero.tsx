import Image from 'next/image'
import placeholderImage from './../../../public/images/placeholder-image.png'

export default function Hero() {
  return (
    <section className="flex items-center justify-between py-[192px] px-4">
      <div className="mx-auto flex max-md:flex-col items-center gap-1">
        <div className="max-w-xl ">
          <div className="mb-4 max-md:text-center">
            <h1 className="text-5xl font-bold ">
              Manage Your Finances with confidence
            </h1>
            <p className="mt-4 text-gray-600">
              FinTech Pro provides powerful tools to track, analyze and optimize
              your financial health. Take control of your money today{' '}
            </p>
          </div>
        </div>
        <div>
          <Image src={placeholderImage} alt="image" />
        </div>
      </div>
    </section>
  )
}
