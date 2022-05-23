const Steps = ({ step }) => {
  return (
    <div className="font-Inter flex flex-col w-full py-4 px-8">
      <div className="flex flex-row justify-start space-x-12 mb-5">
        <div className="flex flex-row">
          <div
            className={`px-4 py-2 rounded-lg ${
              step === 1 ? `bg-primary-green-500` : ` bg-neutral-90`
            }`}
          >
            <p
              className={`font-bold  ${
                step === 1 ? `text-neutral-100` : ` text-neutral-80`
              }`}
            >
              1
            </p>
          </div>
          <p
            className={`p-2  
          ${step === 1 ? `text-neutral-40` : ` text-neutral-60`}
          `}
          >
            Create account
          </p>
        </div>

        <div className="flex flex-row">
          <div
            className={`px-4 py-2  rounded-lg 
            ${step === 2 ? `bg-primary-green-500` : ` bg-neutral-90`}
          `}
          >
            <p
              className={`font-bold ${
                step === 2 ? `text-neutral-100` : ` text-neutral-80`
              }`}
            >
              2
            </p>
          </div>
          <p
            className={`p-2 ${
              step === 2 ? `text-neutral-40` : ` text-neutral-60`
            }`}
          >
            Contact Person
          </p>
        </div>
      </div>
      <hr className="text-neutral-90" />
    </div>
  )
}

export default Steps
