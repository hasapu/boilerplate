/** === IMPORT PACKAGE HERE === */
import { useSelector } from 'react-redux';
import * as models from '@models';
/** === IMPORT EXTERNAL FUNCTION HERE === */
import { RootState } from '@reducer/store';
/** === IMPORT TYPE === */
import type { AuthProps } from '../data/reducers/auth/store';
/** === FUNCTION === */
/** => for data permanent */
const useDataPermanent = (): models.Permanent => {
  return useSelector((state: RootState) => state.permanent);
};
/** => for flag rtdb */
const useDataFlagRTDB = (): models.FlagRTDB => {
  return useSelector((state: RootState) => state.global.flagRTDB);
};
/** => for auth data */
const useDataAuth = (): AuthProps => {
  return useSelector((state: RootState) => state.auth);
};
/** === EXPORT === */
export { useDataPermanent, useDataFlagRTDB, useDataAuth };
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
