import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/selectors/user.selectors';
import { Navigate } from 'react-router-dom';

interface IProps {
    children: JSX.Element;
}

export const PrivateRoute = ({ children }: IProps): JSX.Element => {
    const user = useSelector(selectUser);

    return user.role === 'Admin' ? children : <Navigate to={'/profile'} />;
};
