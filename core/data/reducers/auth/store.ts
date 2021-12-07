/**
 * ============================================================
 * REGISTER ALL REDUCERS HERE
 * ============================================================
 */
import { combineReducers } from 'redux';
import {
  authLoginUsernameReducer,
  AuthLoginUsernameProps,
} from './auth-login-username.reducer';
import { authLogoutReducer, AuthLogoutProps } from './auth-logout.reducer';
import {
  authRequestOTPReducer,
  AuthRequestOTPProps,
} from './auth-request-otp.reducer';
import {
  authVerifyOTPReducer,
  AuthVerifyOTPProps,
} from './auth-verify-otp.reducer';

export const auth = combineReducers({
  loginUsername: authLoginUsernameReducer,
  loginPhoneNumber: authVerifyOTPReducer,
  logout: authLogoutReducer,
  requestOTP: authRequestOTPReducer,
});

export type AuthProps = {
  loginUsername: AuthLoginUsernameProps;
  loginPhoneNumber: AuthVerifyOTPProps;
  logout: AuthLogoutProps;
  requestOTP: AuthRequestOTPProps;
};
/**
 * ================================================================
 * NOTES
 * ================================================================
 * createdBy: hasapu (team)
 * createDate: 01022021
 * updatedBy: -
 * updatedDate: -
 * updatedFunction/Component:
 * -> NaN (no desc)
 * -> NaN (no desc)
 */
