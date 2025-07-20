import React from "react"
import { Input, InputRef } from "antd"
import { SearchProps } from "antd/es/input"
import { defaultTheme } from "@/styles/themes"

const { Search } = Input

interface CustomSearchProps extends SearchProps {
  width?: string | number
}

const CustomSearch = React.forwardRef<InputRef, CustomSearchProps>(
  (
    {
      width = "100%",
      variant = "outlined",
      size = defaultTheme.size,
      ...props
    },
    ref
  ) => {
    return (
      <Search
        variant={variant}
        ref={ref}
        size={size}
        style={{ ...props.style, width }}
        {...props}
      />
    )
  }
)

export default CustomSearch
