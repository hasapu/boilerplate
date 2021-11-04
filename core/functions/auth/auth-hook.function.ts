/** === IMPORT PACKAGE HERE === */
import { useDispatch } from 'react-redux';
/** === IMPORT EXTERNAL FUNCTION HERE === */
import * as Actions from '../../data/actions';
import * as models from '@models';
/** === FUNCTION === */
/** => call auth action */
const useAuthAction = () => {
  const dispatch = useDispatch();
  return {
    loginUserName: (data: models.LoginUserName) => {
      dispatch(Actions.loginUserNameProcess(data));
    },
    resetLoginUsername: () => {
      dispatch(Actions.loginUserNameReset());
    },
    requestOTP: (data: models.OtpRequest) => {
      dispatch(Actions.requestOTPProcess(data));
    },
    resetRequestOTP: () => {
      dispatch(Actions.requestOTPReset());
    },
    verificationOTP: (data: models.LoginPhoneNumber) => {
      dispatch(Actions.verificationOTPProcess(data));
    },
    resetVerificationOTP: () => {
      dispatch(Actions.verificationOTPReset());
    },
    logout: () => {
      dispatch(Actions.logoutProcess());
    },
    resetLogout: () => {
      dispatch(Actions.logoutReset());
    },
  };
};
/** === EXPORT === */
export { useAuthAction };
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
