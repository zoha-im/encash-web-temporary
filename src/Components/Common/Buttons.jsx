import React from "react"

const Button = (props) => {
  // Primary
  if (props.variant === "primary") {
    return (
      <button
        {...props}
        class={`font-Inter btn py-4 px-8 bg-primary-green-500 text-neutral-100 font-semibold rounded-lg ${
          props.icon && ` items-center inline-flex`
        } ${props.className}`}
      >
        {props.icon ? (
          <>
            <span class="mr-2">{props.children}</span>
            <i>{props.icon}</i>
          </>
        ) : (
          props.children
        )}
      </button>
    )
  } else if (props.variant === "secondary") {
    return (
      <button
        {...props}
        class={`font-Inter btn py-4 px-8 bg-neutral-100 font-medium rounded-lg border border-gray-100 ${
          props.icon && ` items-center inline-flex`
        } ${props.className}`}
      >
        {props.icon ? (
          <>
            <i>{props.icon}</i>
            <span class="ml-2">{props.children}</span>
          </>
        ) : (
          props.children
        )}
      </button>
    )
  }
}

export default Button
