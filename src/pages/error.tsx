import { useRouteError } from 'react-router-dom'
import { ReloadOutlined, HomeOutlined } from '@ant-design/icons'
import CustomButton from 'src/components/custom/CustomButton'
import CustomCollapse from 'src/components/custom/CustomCollapse'
import { CustomParagraph } from 'src/components/custom/CustomParagraph'
import CustomResult from 'src/components/custom/CustomResult'
import styled from 'styled-components'
import CustomCol from 'src/components/custom/CustomCol'
import CustomDivider from 'src/components/custom/CustomDivider'
import CustomRow from 'src/components/custom/CustomRow'
import CustomSpace from 'src/components/custom/CustomSpace'
import ConditionalComponent from 'src/components/ConditionalComponent'
import { AppError } from 'src/utils/app-error'

const StackDescription = styled.div`
  position: relative;
  margin-top: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 1.5;
  text-align: left;
  width: 100%;
  max-width: 500px;
  max-height: 200px;
  height: 250px;
  overflow: auto;
  white-space: pre-wrap;
  overflow-x: hidden;

  p {
    text-align: center;
  }
`

const Description = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 1.5;
  text-align: center;
  width: 100%;
  max-width: 500px;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
`

const RouteErrorElement = () => {
  const error = useRouteError() as AppError

  return (
    <CustomRow justify="center" align="middle" height="100vh">
      <CustomCol xs={24} md={12} lg={10}>
        <CustomResult
          style={{ width: '100%' }}
          status={'error'}
          title={
            <CustomParagraph>
              <p>{error?.name || 'Error inesperado'}</p>
              <code>{error?.code}</code>
            </CustomParagraph>
          }
          subTitle={
            <CustomSpace
              direction="vertical"
              split={<CustomDivider />}
              width="100%"
            >
              <Description>{error.message}</Description>

              <ConditionalComponent condition={!!error.stack}>
                <CustomCol xs={24}>
                  <CustomCollapse
                    size={'middle'}
                    bordered={false}
                    items={[
                      {
                        key: 1,
                        label: 'Detalles del error',
                        children: (
                          <StackDescription>
                            {error.stack?.split(' at ')?.map((item, index) =>
                              index > 0 ? (
                                <span key={index}>
                                  {item}
                                  <br />
                                </span>
                              ) : null
                            )}
                          </StackDescription>
                        ),
                      },
                    ]}
                  />
                </CustomCol>
              </ConditionalComponent>
            </CustomSpace>
          }
          extra={
            <CustomSpace>
              <CustomButton icon={<HomeOutlined />} type="link">
                Ir a inicio
              </CustomButton>
              <CustomButton
                icon={<ReloadOutlined />}
                onClick={() => window?.location.reload()}
                type="link"
              >
                Recargar página
              </CustomButton>
            </CustomSpace>
          }
        />
      </CustomCol>
    </CustomRow>
  )
}

export default RouteErrorElement
