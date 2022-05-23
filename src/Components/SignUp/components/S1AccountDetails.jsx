import { InputGroup, InputSelect } from "../../index"

const S1AccountDetail = () => {
  return (
    <>
      <div className="flex flex-col w-full pt-8 pb-8 px-8">
        <p className="font-Inter text-gray-400 ">STEP 1</p>
        <h1 className="font-Inter font-bold text-3xl">Account Details</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <InputGroup
          name="email"
          type="email"
          onChange={(e) => console.log(e.target.value)}
          label="email"
        />
        <InputGroup
          name="password"
          type="password"
          onChange={(e) => console.log(e.target.value)}
          label="password"
        />
      </div>

      <div className="flex flex-row justify-between items-center">
        <InputGroup
          name="company_name"
          type="text"
          onChange={(e) => console.log(e.target.value)}
          label="Company Name"
        />
        <InputGroup
          name="telephone"
          type="text"
          onChange={(e) => console.log(e.target.value)}
          label="Telephone"
        />
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <InputGroup
          name="address"
          type="text"
          onChange={(e) => console.log(e.target.value)}
          label="Address"
        />
        <InputSelect
          name="industry"
          type="select"
          onChange={(e) => console.log(e.target.value)}
          label="Industry"
          options={["Media Agency", "Advertising Agency", "Digital Agency"]}
        />
      </div>
    </>
  )
}

export default S1AccountDetail
