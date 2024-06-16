import * as Yup from "yup";
import { LoginContent, LoginForm, ButtonsContainer, ButtonWrapper } from './styles'
import { useFormik } from 'formik'
import { useAppDispatch } from '../../store/hooks'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { authSliceActions } from '../../store/redux/authSlice/authSlice'
import { LOGIN_FORM_NAMES, LoginFormValues } from "./types"


const schema = Yup.object().shape({
  [LOGIN_FORM_NAMES.EMAIL]: Yup.string().required("email required").email("Invalid email format"),
  [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
    .required("password required")
    .min(8, "Password must be at least 8 characters")
    });

const Login = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      dispatch(authSliceActions.login(values))
      },
  });

  return (
    <LoginContent>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="EMAIL"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <div>
          <Input
            name="password"
            type={"password"}
            placeholder="KENNWORT"
            label="Kennwort"
            onInputChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
          <p style={{ position: "relative", top: "-15px" }}>Forgot your password?</p>
        </div>

        <ButtonsContainer>
          <ButtonWrapper>
            <Button name="SUBMIT" type="submit" />
          </ButtonWrapper>
        </ButtonsContainer>
      </LoginForm>
    </LoginContent>
  );
};

export default Login;