import { useForm } from 'antd/es/form/Form'
import React from 'react'
import CustomButton from 'src/components/custom/CustomButton'
import CustomFormItem from 'src/components/custom/CustomFormItem'
import CustomForm from 'src/components/custom/CustomFrom'
import CustomInput from 'src/components/custom/CustomInput'
import CustomPasswordInput from 'src/components/custom/CustomPasswordInput'
import CustomRow from 'src/components/custom/CustomRow'
import CustomSpin from 'src/components/custom/CustomSpin'
import Logo from 'src/components/Logo'
import { useAuthenticateUserMutation } from 'src/services/auth/useAuthenticateUserMutation'
import { errorHandler } from 'src/utils/error-handler'
import styled from 'styled-components'

const contentStyle: React.CSSProperties = {
  height: window.innerHeight,
}

const FormContainer = styled.div`
  height: 100vh;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

const Content = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const buttonStyle: React.CSSProperties = { width: '100%' }

const CustomLabel = ({ text }: { text: string }) => (
  <span style={{ padding: 0, marginBottom: -10 }}>{text}</span>
)

type LoginForm = {
  username: string
  password: string
}

const Login = () => {
  const [form] = useForm<LoginForm>()

  const { mutateAsync: authenticateUser, isPaused } =
    useAuthenticateUserMutation()

  const handleFinish = async (values: LoginForm) => {
    try {
      await authenticateUser(values)
    } catch (error) {
      errorHandler(error)
    }
  }

  return (
    <CustomSpin spinning={isPaused}>
      <div style={{ width: '100vw' }}>
        <CustomRow width={'100%'}>
          <Content style={contentStyle}>
            <Logo fontSize={'16px'} />
          </Content>

          <FormContainer>
            <CustomForm
              style={{
                width: '80%',
                padding: '0 20px',
              }}
              autoComplete={'off'}
              form={form}
              layout={'vertical'}
              onFinish={handleFinish}
            >
              <Logo />
              <CustomFormItem
                label={<CustomLabel text="Usuario" />}
                name="username"
                rules={[{ required: true }]}
              >
                <CustomInput />
              </CustomFormItem>
              <CustomFormItem
                label={<CustomLabel text="Contraseña" />}
                name="password"
                rules={[{ required: true }]}
              >
                <CustomPasswordInput />
              </CustomFormItem>
              <CustomFormItem>
                <CustomRow justify="center">
                  <CustomButton
                    htmlType="submit"
                    type="primary"
                    style={buttonStyle}
                  >
                    Iniciar sesión
                  </CustomButton>
                </CustomRow>
              </CustomFormItem>
            </CustomForm>
          </FormContainer>
        </CustomRow>
      </div>
    </CustomSpin>
  )
}

export default Login
