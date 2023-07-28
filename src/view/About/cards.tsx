export default function Card() {
  return (
    <div className="mt-6 sm:mt-8">
      <dl className="grid grid-cols-1 md:grid-cols-3 md:gap-2">
        <div className="flex flex-col rounded-lg border border-gray-100 py-6 gap-6 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Year Experience
          </dt>

          <dd className="text-4xl font-extrabold text-cyan-600 md:text-5xl">
            03+
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-6 gap-6 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Companies Work
          </dt>

          <dd className="text-4xl font-extrabold text-cyan-600 md:text-5xl">
            08
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-6 gap-6 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Complete Project
          </dt>

          <dd className="text-4xl font-extrabold text-cyan-600 md:text-5xl">
            26+
          </dd>
        </div>
      </dl>
    </div>
  );
}
