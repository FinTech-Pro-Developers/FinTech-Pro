import { CardPrimary } from './cardPrimary'

type KeyFeatureProps = {
  icon: React.ReactNode
  title: string
  description: string
}

export function KeyFeature({ title, description, icon }: KeyFeatureProps) {
  return (
    <CardPrimary className="px-8 pt-6 pb-7 text-center h-full">
      <div className="flex justify-center items-center mx-auto bg-black rounded-full text-white size-11">
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-brand-primary my-2.5">{description}</p>
    </CardPrimary>
  )
}
