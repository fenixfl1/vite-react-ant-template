import React from 'react'
import { Form, FormItemProps } from 'antd'

const { Item } = Form

const CustomFormItem: React.FC<FormItemProps> = ({ required, ...props }) => {
  return (
    <Item required={required} {...props}>
      {props.children}
    </Item>
  )
}

export default CustomFormItem
