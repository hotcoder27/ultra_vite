import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="bg-white py-24 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl max-sm:text-lg font-bold text-green-600 text-center mb-8">
          Experience You Can Rely On
        </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dd className="order-first text-4xl font-bold tracking-tight text-green-500 sm:text-6xl">
                {stat.value}
              </dd>
              <dt className="text-lg font-medium text-gray-700">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
