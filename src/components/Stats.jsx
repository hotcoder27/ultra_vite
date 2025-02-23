import { stats } from "../constants"

const Stats = () => {
  return (
    <div className="bg-green-500 py-6 sm:py-12 shadow-2xl">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-3xl max-sm:text-lg font-bold text-white text-center mb-8">
        Experience You Can Rely On
      </h2>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-white">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>  
  )
}

export default Stats