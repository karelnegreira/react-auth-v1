import { signUpRoute } from './signUpRoute';
import { loginRoute } from './loginRoute';
import { updateUserInfoRoute }  from './updateUserInfoRoute';
import { testEmailRoute } from './testEmailRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
import { googleOauthCallBackRoute } from './googleOauthCallbackRoute';

export const routes = [
    loginRoute, 
    signUpRoute, 
    updateUserInfoRoute, 
    testEmailRoute, 
    verifyEmailRoute, 
    forgotPasswordRoute, 
    resetPasswordRoute, 
    getGoogleOauthUrlRoute, 
    googleOauthCallBackRoute, 
];
