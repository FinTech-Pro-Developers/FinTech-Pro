import { Bell, ChartNoAxesCombined, LayoutList } from 'lucide-react'
import { KeyFeature } from '../molecules/keyFeature'
import { Button } from '@/components/base/button'

export function Features() {
  return (
    <section className="bg-brand-secondary py-[128px] px-4 dark:bg-black/85">
      <div className="max-w-[1024px] w-full mx-auto flex flex-col items-center">
        <h2 className="font-bold text-4xl">Key Features</h2>
        <span className="text-xl text-brand-primary mt-2 text-center">
          Everything you need to manage your finances in one place
        </span>

        <div className="flex max-md:flex-col  max-md:gap-14 gap-6 mt-8">
          {features.map((feature) => (
            <div className="flex flex-col justify-between" key={feature.title}>
              <KeyFeature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
              <Button className="mt-5">See more</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <LayoutList />,
    title: 'Transaction Tracking',
    description:
      'Record and categorize all your financial transactions in one place.',
  },
  {
    icon: <ChartNoAxesCombined />,
    title: 'Financial Reports',
    description:
      'Generate detailed reports to analyze your spending habits and financial health.',
  },
  {
    icon: <Bell />,
    title: 'Alert Notifications',
    description:
      'Receive timely alerts for unusual activity, bill payments, and budget limits.',
  },
]
