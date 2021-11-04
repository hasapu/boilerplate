import * as types from '@types';
import * as models from '@models';
/** EXTERNAL FUNCTION */
import { setUserFCM } from '../../../functions/firebase/fcm-firestore';
/** === LOGIN WITH USERNAME === */
/** => process */
export const loginUserNameProcess = (
  data: models.LoginUserName,
): models.LoginUserNameProcessAction => {
  return { type: types.LOGIN_USERNAME_PROCESS, payload: data };
};
/** => success */
export const loginUserNameSuccess = (
  data: models.LoginSuccess,
): models.LoginUserNameSuccessAction => {
  setUserFCM(data.data.user.id);
  return { type: types.LOGIN_USERNAME_SUCCESS, payload: data };
};
/** => failed */
export const loginUserNameFailed = (
  data: models.ErrorProps,
): models.LoginUserNameFailedAction => {
  return { type: types.LOGIN_USERNAME_FAILED, payload: data };
};
/** => reset */
export const loginUserNameReset = () => {
  return { type: types.LOGIN_USERNAME_RESET };
};
/** === REQUEST OTP === */
/** => process */
export const requestOTPProcess = (
  data: models.OtpRequest,
): models.RequestOTPProcessAction => {
  return { type: types.REQUEST_OTP_PROCESS, payload: data };
};
/** => success */
export const requestOTPSuccess = (
  data: models.OtpGetSuccess,
): models.RequestOTPSuccessAction => {
  return { type: types.REQUEST_OTP_SUCCESS, payload: data };
};
/** => failed */
export const requestOTPFailed = (
  data: models.ErrorProps,
): models.RequestOTPFailedAction => {
  return { type: types.REQUEST_OTP_FAILED, payload: data };
};
/** => reset */
export const requestOTPReset = () => {
  return { type: types.REQUEST_OTP_RESET };
};
/** === VERIFICATION OTP === */
/** => process */
export const verificationOTPProcess = (
  data: models.LoginPhoneNumber,
): models.VerificationOTPProcessAction => {
  return { type: types.VERIFICATION_OTP_PROCESS, payload: data };
};
/** => success */
export const verificationOTPSuccess = (
  data: models.LoginSuccess,
): models.VerificationOTPSuccessAction => {
  return { type: types.VERIFICATION_OTP_SUCCESS, payload: data };
};
/** => failed */
export const verificationOTPFailed = (
  data: models.ErrorProps,
): models.VerificationOTPFailedAction => {
  return { type: types.VERIFICATION_OTP_FAILED, payload: data };
};
/** => reset */
export const verificationOTPReset = () => {
  return { type: types.VERIFICATION_OTP_RESET };
};
/** === LOGOUT === */
/** => process */
export const logoutProcess = (): models.LogoutProcessAction => {
  return { type: types.LOGOUT_PROCESS };
};
/** => success */
export const logoutSuccess = (
  data: models.LogoutSuccess,
): models.LogoutSuccessAction => {
  setUserFCM(null);
  return { type: types.LOGOUT_SUCCESS, payload: data };
};
/** => failed */
export const logoutFailed = (
  data: models.ErrorProps,
): models.LogoutFailedAction => {
  return { type: types.LOGOUT_FAILED, payload: data };
};
/** => reset */
export const logoutReset = () => {
  return { type: types.LOGOUT_RESET };
};
