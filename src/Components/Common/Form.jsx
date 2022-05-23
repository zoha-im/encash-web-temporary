export const InputGroup = (props) => {
  return (
    <div class="form-group w-full  py-4 px-8">
      <label class="block text-sm font-bold uppercase mb-2">
        {props.label}
      </label>
      <input
        {...props}
        class="block 
        form-input
        bg-gray-100 
        rounded-lg 
        py-3 
        px-4 
        transition
      ease-in-out
      
        focus:outline-none 
        focus:bg-neutral-100 
        focus:border border-primary-green-500"
      />
    </div>
  )
}

export const InputSelect = (props) => {
  return (
    <div class="form-group w-full py-4 px-8">
      <label class="block text-sm font-bold uppercase mb-2">
        {props.label}
      </label>
      <select
        class="form-select 
      appearance-none
      block
      w-full
      px-4 
      py-3 
      text-base
      font-normal
      font-Inter
      text-gray-700
      bg-gray-100
      bg-clip-padding 
      bg-no-repeat
      rounded-lg
      transition
      ease-in-out
      m-0
      
      focus:text-gray-700 
      focus:bg-white 
      focus:border-primary-green-500 
      focus:outline-none"
        aria-label="Select an option"
      >
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
