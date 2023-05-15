import { Navigate } from 'react-router-dom';
import jwtDecode, { JwtPayload } from 'jwt-decode';

interface IProps {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: IProps): JSX.Element => {
    const refreshToken = localStorage.getItem('refreshToken');

    const isExpired = (token: string): boolean => {
        const decode = jwtDecode<JwtPayload>(token);

        return !!decode.exp && Date.now() >= decode.exp * 1000;
    };
    return refreshToken && !isExpired(refreshToken) ? children : <Navigate to={'/signin'} />;
};
