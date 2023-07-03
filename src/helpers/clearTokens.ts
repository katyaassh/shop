export const clearTokens = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
};
