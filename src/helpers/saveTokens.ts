export const saveTokens = ({ token, refreshToken }: { token: string; refreshToken: string }): void => {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
};
