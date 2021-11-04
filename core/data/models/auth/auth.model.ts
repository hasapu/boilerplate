/** === LOGIN WITH USERNAME === */
export interface LoginUserName {
  username: string;
  password: string;
}
/** === LOGIN WITH PHONENUMBER === */
export interface LoginPhoneNumber {
  mobilePhone: string;
  otp: string;
}
/** === REQUEST OTP === */
export interface OtpRequest {
  mobilePhone: string;
}
/** === OTP DATA === */
export interface OtpData {
  message: string;
}
/** === SUCCESS GET OTP === */
export interface OtpGetSuccess {
  data: OtpData;
}
/** === USER AUTH DATA === */
export interface UserAuthData {
  id: number;
  name: string | null;
  imageUrl: string | null;
}
/** === AUTH DATA === */
export interface AuthData {
  sessionActiveUntil: Date;
  sessionExpiredUntil: Date;
  user: UserAuthData;
}
/** === THIS FOR SUCCESS FETCH DATA === */
export interface LoginSuccess {
  data: AuthData;
}
/** === LOGOUT SUCCESS === */
export interface LogoutSuccess {
  message: string;
}
