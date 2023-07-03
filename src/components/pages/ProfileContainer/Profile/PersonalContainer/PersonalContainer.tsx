import { Personal } from './Personal/Personal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../store/selectors/user.selectors';
import { useState } from 'react';
import { IUserValues } from '../../../../../models/user-values';
import { userAPI } from '../../../../../api/user.api';
import { useDebounce } from '../../../../../hooks/useDebounce';
import { addressAPI } from '../../../../../api/address.api';

export const PersonalContainer = (): JSX.Element => {
    const user = useSelector(selectUser);

    const [message, setMessage] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const getAddresses = async (value: string): Promise<void> => {
        const response = await addressAPI.getAddress(value);
        const suggestions = response.suggestions.map((item) => item.value);
        setSuggestions(suggestions);
    };

    const getDelayAddresses = useDebounce(getAddresses);

    const onAddressesChange = (value: string): void => {
        getDelayAddresses(value);
    };

    const onSubmit = async (values: IUserValues): Promise<void> => {
        try {
            await userAPI.updateUser(values);
            setMessage('Изменения сохранены!');
        } catch (e: any) {
            setMessage(e.response.data.message);
        }
    };

    return (
        <Personal
            user={user}
            message={message}
            onSubmit={onSubmit}
            onAddressesChange={onAddressesChange}
            suggestions={suggestions}
        />
    );
};
