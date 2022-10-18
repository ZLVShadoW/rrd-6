import React from 'react';
import {LoginContext} from '../hoc/LoginProvider';

export const useAuth = () => React.useContext(LoginContext)