import React from 'react'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'
import { Collapse as AntCollapse, CollapseProps } from 'antd'

const Collapse = styled(AntCollapse)`
  background-color: ${({ theme }) => theme.colorText} !important;
  color: ${({ theme }) => theme.colorText} !important;

  .ant-collapse-item {
    border-radius: ${({ theme }) => theme.borderRadius}px !important;
    background-color: ${({ theme }) =>
      theme.isDark ? '#3333' : theme.colorBorder} !important;
  }

  .ant-collapse-item:not(:last-child) {
    margin-bottom: 10px !important;
  }
`

const CustomCollapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  ({ bordered = true, expandIconPosition = 'end', ...props }, ref) => {
    return (
      <Collapse
        ref={ref}
        bordered={bordered}
        expandIconPosition={expandIconPosition}
        expandIcon={({ isActive }) => (
          <DownOutlined style={{ fontSize: 16 }} rotate={isActive ? 180 : 0} />
        )}
        {...props}
      />
    )
  }
)
export default CustomCollapse
