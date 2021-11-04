/** === IMPORT EXTERNAL FUNCTION === */
import apiAuth from '../../../services/apiAuth';
import apiGeneral from '../../../services/apiGeneral';
import * as models from '@models';
/** === FUNCTION === */
/** => login with username and password */
const loginUserName = (data: models.LoginUserName) => {
  const path = 'login';
  return apiAuth<models.LoginSuccess>(path, 'v1', 'POST', data);
};
/** => request OTP */
const requestOTP = (data: models.OtpRequest) => {
  const path = 'otp/request-otp';
  return apiAuth<models.OtpGetSuccess>(path, 'v1', 'POST', data);
};
/** => verification OTP */
const verificationOTP = (data: models.LoginPhoneNumber) => {
  const path = 'otp/verification';
  return apiAuth<models.LoginSuccess>(path, 'v1', 'POST', data);
};
/** => logout */
const logout = () => {
  const path = 'logout';
  return apiGeneral<models.LogoutSuccess>('auth', path, 'auth', 'v1', 'POST');
};

/** === EXPORT FUNCTIONS === */
export const AuthApi = {
  loginUserName,
  requestOTP,
  verificationOTP,
  logout,
};
