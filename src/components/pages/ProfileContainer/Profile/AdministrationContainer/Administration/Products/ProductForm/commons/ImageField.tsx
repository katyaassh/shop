import s from '../ProductForm.module.scss';
import { useField } from 'formik';
import defaultImage from '../../../../../../../../../assets/image/defaultImg.jpg';
import { ChangeEvent, useState } from 'react';

export const ImageField = (): JSX.Element => {
    const [_, meta, helpers] = useField('image');

    const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    const onImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            const photo = e.target.files[0];

            const reader = new FileReader();
            reader.readAsDataURL(photo);

            reader.onload = (event) => {
                if (event.target) {
                    setImage(event.target.result);
                }
            };

            helpers.setValue(photo);
        }
    };

    return (
        <div className={s.addImage}>
            <input name={'image'} type={'file'} accept='image/png, image/jpeg' onChange={onImageChange} />
            {meta.value ? (
                <img src={image ? image : meta.value} alt='productImage' className={s.image} />
            ) : (
                <img src={defaultImage} alt='defaultImage' className={s.image} />
            )}
        </div>
    );
};
