import React, { useCallback, useEffect, useState } from 'react'
import RolesTable from './components/RolesTable'
import { Form } from 'antd'
import CustomCard from 'src/components/custom/CustomCard'
import SearchBar from 'src/components/SearchBar'
import useDebounce from 'src/hooks/use-debounce'
import ConditionalComponent from 'src/components/ConditionalComponent'
import RolesForm from './components/RolesForm'

const RolesPage: React.FC = () => {
  const [form] = Form.useForm()
  const [rolesModalState, setRolesModalState] = useState<boolean>()
  const [searchKey, setSearchKey] = useState<string>('')
  const debounce = useDebounce(searchKey)

  const handleSearch = useCallback(() => {}, [debounce])

  useEffect(handleSearch, [handleSearch])

  const toggleModalState = () => setRolesModalState(!rolesModalState)

  return (
    <>
      <CustomCard style={{ padding: 15 }}>
        <SearchBar
          form={form}
          createText={'Nuevo Rol'}
          searchPlaceholder={'Buscar roles...'}
          onSearch={setSearchKey}
          onCreate={toggleModalState}
          filterContent={<>Plantilla de filtro</>}
        />
        <RolesTable dataSource={[]} />

        <ConditionalComponent condition={rolesModalState}>
          <RolesForm open={rolesModalState} onClose={toggleModalState} />
        </ConditionalComponent>
      </CustomCard>
    </>
  )
}

export default RolesPage
