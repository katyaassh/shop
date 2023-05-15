import { EditProductValues } from '../models/edit-product-values';

export const formDataCreator = (values: EditProductValues, formData: FormData): void => {
    const { image, fragrance, ...restData } = values;

    formData.append('image', image);

    let key: keyof typeof restData;

    for (key in restData) {
        formData.set(key, restData[key] as string);
    }

    fragrance.forEach((fr, index) => {
        formData.set(`fragrance[${index}]`, fr);
    });
};
