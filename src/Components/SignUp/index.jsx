import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import { Button } from "../index"
import S1AccountDetail from "./components/S1AccountDetails"
import S2ContactPerson from "./components/S2ContactPerson"
import Steps from "./components/Steps"

const SignUp = () => {
  let navigate = useNavigate()
  const [step, setStep] = useState(1)

  const handleNext = (current) => {
    setStep(current + 1)
  }
  const handleBack = (current) => {
    setStep(current - 1)
  }
  const handleSubmit = () => {}

  return (
    <>
      <form className="flex flex-col items-center justify-center">
        <Steps step={step} />
        {step === 1 && <S1AccountDetail />}
        {step === 2 && <S2ContactPerson />}

        <div className="flex flex-row justify-end items-center w-full">
          {step > 1 && (
            <Button
              variant="secondary"
              icon={<FiArrowLeft size={"1.4rem"} />}
              className="mr-8 mt-24"
              onClick={(e) => {
                e.preventDefault()
                handleBack(step)
              }}
            >
              Previous
            </Button>
          )}

          {step < 2 && (
            <Button
              variant="primary"
              icon={<FiArrowRight size={"1.4rem"} />}
              className="mr-8 mt-24"
              onClick={(e) => {
                e.preventDefault()
                handleNext(step)
              }}
            >
              Next
            </Button>
          )}
          {step > 1 && (
            <Button
              variant="primary"
              className="mr-8 mt-24"
              onClick={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              Register
            </Button>
          )}
        </div>
      </form>
      <p
        className="text-sm text-neutral-60 mt-14 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Already Have an account?
      </p>
    </>
  )
}

export default SignUp
