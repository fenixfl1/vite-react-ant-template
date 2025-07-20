import React from 'react'
import CustomSider from 'src/components/custom/CustomSider'
import CustomLayout from 'src/components/custom/CustomLayout'
import CustomHeader from 'src/components/custom/CustomHeader'
import CustomMenu from 'src/components/custom/CustomMenu'
import CustomContent from 'src/components/custom/CustomContent'
import CustomRow from 'src/components/custom/CustomRow'
import CustomAvatar from 'src/components/custom/CustomAvatar'
import styled from 'styled-components'
import { CustomText } from 'src/components/custom/CustomParagraph'
import ConditionalComponent from 'src/components/ConditionalComponent'
import ThemeTransitionLayout from 'src/components/ThemeTransition'
import { useAppContext } from 'src/context/AppContext'
import Logo from 'src/components/Logo'
import { UserOutlined } from '@ant-design/icons'
import { getSessionInfo } from 'src/lib/session'
import capitalize from 'src/utils/capitalize'

const Header = styled(CustomHeader)`
  display: flex;
  align-items: center;
  height: 64px;
  width: calc(100vw - 240px);
  box-shadow: ${({ theme }) => theme.boxShadow} !important;
  background-color: ${({ theme: { isDark } }) =>
    isDark ? '#000000' : undefined} !important;
`

const Content = styled(CustomContent)`
  overflow: auto;
  padding: 24px 50px;
  margin: 0px;
  min-height: 280px;
  background-color: ${({ theme: { isDark, colorBgContainer } }) =>
    isDark ? undefined : colorBgContainer} !important;
  border-radius: ${({ theme }) => theme.borderRadius}px !important;
`

const Sider = styled(CustomSider)`
  height: 100vh !important;
  background-color: ${({ theme: { isDark, colorBgLayout } }) =>
    isDark ? '#141414' : colorBgLayout} !important;
  box-shadow: ${({ theme }) => theme.boxShadow} !important;
  padding: 10px;
`

const Menu = styled(CustomMenu)`
  border-right: 0;
  background-color: ${({ theme: { isDark, colorBgLayout } }) =>
    isDark ? '#141414' : colorBgLayout} !important;
`

const Layout = styled(CustomLayout)`
  height: 100vh !important;
`

const RootTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme, isAuthenticated } = useAppContext()

  return (
    <ConditionalComponent condition={isAuthenticated} fallback={children}>
      <ThemeTransitionLayout>
        <Layout hasSider>
          <Sider width={240}>
            <CustomRow justify={'center'} style={{ height: '100px' }}>
              <Logo fontSize={'26px'} />
            </CustomRow>
            <Menu theme={theme} mode={'inline'} items={[]} />
          </Sider>
          <CustomLayout>
            <Header>
              <CustomRow justify={'end'} width={'100%'}>
                <CustomRow gap={5}>
                  <CustomAvatar
                    size={44}
                    icon={<UserOutlined />}
                    src={getSessionInfo().avatar}
                  />
                  <CustomText strong>
                    {capitalize(
                      getSessionInfo().name || getSessionInfo().username
                    )}
                  </CustomText>
                </CustomRow>
              </CustomRow>
            </Header>

            <CustomLayout style={{ padding: '0 24px 24px' }}>
              <Content>{children}</Content>
            </CustomLayout>
          </CustomLayout>
        </Layout>
      </ThemeTransitionLayout>
    </ConditionalComponent>
  )
}

export default RootTemplate
