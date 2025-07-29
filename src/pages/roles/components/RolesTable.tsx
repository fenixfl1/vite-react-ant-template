import React from 'react'
import CustomTable from 'src/components/custom/CustomTable'
import { ColumnsType } from 'antd/lib/table'
import CustomSpace from 'src/components/custom/CustomSpace'
import CustomDivider from 'src/components/custom/CustomDivider'
import CustomTooltip from 'src/components/custom/CustomTooltip'
import CustomButton from 'src/components/custom/CustomButton'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

interface RolesTableProps {
  dataSource: unknown[]
}

const RolesTable: React.FC<RolesTableProps> = ({ dataSource }) => {
  const columns: ColumnsType<unknown> = [
    {
      dataIndex: 'ROLE_ID',
      key: 'ROLE_ID',
      title: 'Código',
      width: '5%',
      align: 'center',
    },
    {
      dataIndex: 'NAME',
      key: 'NAME',
      title: 'Nombre',
    },
    {
      dataIndex: 'DESCRIPTION',
      key: 'DESCRIPTION',
      title: 'Descripción',
    },
    {
      dataIndex: 'STATE',
      key: 'STATE',
      title: 'Estado',
      width: '10%',
      align: 'center',
      render: (value) => (value === 'A' ? 'ACTIVO' : 'INACTIVO'),
    },
    {
      dataIndex: 'STATE',
      key: 'STATE',
      title: 'Acciones',
      width: '5%',
      align: 'center',
      render: (value: string) => (
        <CustomSpace
          direction={'horizontal'}
          split={<CustomDivider type={'vertical'} style={{ margin: 0 }} />}
        >
          <CustomTooltip title={'Editar'}>
            <CustomButton type={'link'} icon={<EditOutlined />} />
          </CustomTooltip>
          <CustomTooltip title={value === 'A' ? 'Inhabilitar' : 'Habilitar'}>
            <CustomButton
              danger={value === 'A'}
              type={'link'}
              icon={<DeleteOutlined />}
            />
          </CustomTooltip>
        </CustomSpace>
      ),
    },
  ]

  return <CustomTable columns={columns} dataSource={dataSource} />
}

export default RolesTable
