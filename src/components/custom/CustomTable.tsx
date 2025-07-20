/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Table } from 'antd'
import { ColumnType } from 'antd/es/table'
import { TableProps } from 'antd/lib/table'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;

  .btn-export-table {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`

export interface CustomColumnType<T> extends ColumnType<T> {
  editable?: boolean
}

const CustomTable = React.forwardRef<any, TableProps<any>>(
  ({ dataSource = [], expandable, bordered = false, ...props }, ref) => {
    return (
      <>
        <Container>
          <Table
            dataSource={dataSource}
            bordered={bordered}
            ref={ref}
            rowClassName={(record) =>
              record?.state === 'A' ? 'active-row' : 'inactive-row'
            }
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '15', '20', '25'],
              simple: true,
              ...props.pagination,
            }}
            expandable={{
              indentSize: 25,
              ...expandable,
            }}
            {...props}
          />
        </Container>
      </>
    )
  }
)

export default CustomTable
