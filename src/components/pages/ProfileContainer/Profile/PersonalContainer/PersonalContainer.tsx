import { Personal } from './Personal/Personal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../store/selectors/user.selectors';
import { useState } from 'react';
import { IUserValues } from '../../../../../models/user-values';
import { userAPI } from '../../../../../api/user.api';
import { useDebounce } from '../../../../../hooks/useDebounce';
import { addressAPI } from '../../../../../api/address.api';

export const PersonalContainer = (): JSX.Element => {
    const [message, setMessage] = useState('');

    const user = useSelector(selectUser);

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const getAddresses = (value: string): void => {
        addressAPI.getAddress(value).then((response) => {
            const suggestions = response.suggestions.map((item) => {
                return item.value;
            });
            setSuggestions(suggestions);
        });
    };

    const getDelayAddresses = useDebounce(getAddresses);

    const onAddressesChange = (value: string): void => {
        getDelayAddresses(value);
    };

    const onSubmit = (values: IUserValues): void => {
        userAPI
            .updateUser(values)
            .then((_) => {
                setMessage('Изменения сохранены!');
            })
            .catch((e) => {
                setMessage(e.response.data.message);
            });
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
