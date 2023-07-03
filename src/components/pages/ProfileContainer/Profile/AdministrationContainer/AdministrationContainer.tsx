import { Outlet } from 'react-router-dom';

export const AdministrationContainer = (): JSX.Element => {
    return (
        <div>
            <div>Администрация</div>
            <Outlet />
        </div>
    );
};
