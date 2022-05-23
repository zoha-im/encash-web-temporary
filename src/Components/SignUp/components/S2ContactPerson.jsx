import { InputGroup } from "../../index"
const S2ContactPerson = () => {
  return (
    <>
      <div className="flex flex-col w-full pt-8 pb-8 px-8">
        <p className="font-Inter text-gray-400 ">STEP 2</p>
        <h1 className="font-Inter font-bold text-3xl">Contact Person</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <InputGroup
          name="fullname"
          type="text"
          onChange={(e) => console.log(e.target.value)}
          label="Full Name"
        />
        <InputGroup
          name="Role"
          type="text"
          onChange={(e) => console.log(e.target.value)}
          label="Role"
        />
      </div>

      <div className="flex flex-row justify-between items-center">
        <InputGroup
          name="phone"
          type="tel"
          onChange={(e) => console.log(e.target.value)}
          label="Phone"
        />
        <InputGroup
          name="contact_email"
          type="email"
          onChange={(e) => console.log(e.target.value)}
          label="Email"
        />
      </div>
    </>
  )
}

export default S2ContactPerson
