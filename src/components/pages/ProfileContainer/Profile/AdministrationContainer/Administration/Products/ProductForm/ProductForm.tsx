import s from './ProductForm.module.scss';
import { Field, Form, Formik } from 'formik';
import { MainButton } from '../../../../../../../common/MainButton/MainButton';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../../../../../../../store/selectors/filters.selectors';
import { RadioGroup } from './commons/RadioGroup';
import { ICategory } from '../../../../../../../../models/category';
import { Checkboxes } from './commons/Checkboxes';
import { TextFields } from './commons/TextFields';
import { EditProductValues } from '../../../../../../../../models/edit-product-values';
import { productsAPI } from '../../../../../../../../api/products.api';
import { formDataCreator } from '../../../../../../../../helpers/formData-creator';
import { selectProduct } from '../../../../../../../../store/selectors/product.selectors';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../../../../../../store/thunks/product.thunks';
import { IDispatch } from '../../../../../../../../store/types/types';
import { ImageField } from './commons/ImageField';

export const ProductForm = (): JSX.Element => {
    const filters: ICategory[] = useSelector(selectFilters);
    const productData = useSelector(selectProduct);
    const dispatch: IDispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
        dispatch(getProduct(params.id));
    }, []);

    const categories = filters.reduce(
        (result, category: ICategory) => {
            return {
                ...result,
                [category.category]: category,
            };
        },
        {
            brand: {} as ICategory,
            fragrance: {} as ICategory,
            gender: {} as ICategory,
            perfumeType: {} as ICategory,
            specialOffers: {} as ICategory,
        }
    );

    const initialValues: EditProductValues = {
        image: productData?.image || '',
        name: productData?.name || '',
        amount: productData?.amount || 0,
        fullPrise: productData?.fullPrise || 0,
        count: productData?.count || 0,
        description: productData?.description || '',
        isDiscount: productData?.isDiscount || false,
        isNovelty: productData?.isNovelty || false,
        brand: productData?.brand._id || '',
        gender: productData?.gender._id || '',
        perfumeType: productData?.perfumeType._id || '',
        fragrance: productData?.fragrance.map((item) => item._id) || [],
    };

    const onAddProductSubmit = (values: EditProductValues): void => {
        const formData = new FormData();
        formDataCreator(values, formData);
        productsAPI.addProduct(formData).then((response) => {
            alert('Продукт успешно добавлен!');
            return response;
        });
    };
    const onUpdateProductSubmit = (values: EditProductValues): void => {
        const formData = new FormData();
        formDataCreator(values, formData);
        productsAPI.updateProduct(formData, params.id).then((response) => {
            alert('Продукт успешно обновлен!');
            return response;
        });
    };

    const onSubmit = (values: EditProductValues): void => {
        if (params.id) {
            onUpdateProductSubmit(values);
        } else onAddProductSubmit(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true}>
            {({ handleSubmit }) => (
                <Form className={s.form}>
                    <div style={{ display: 'flex' }}>
                        <ImageField />
                        <TextFields />
                    </div>
                    <div className={s.filters} style={{ marginTop: 20, marginBottom: 20 }}>
                        <div className={s.specialOffers}>
                            <div style={{ marginBottom: 10, fontSize: 18 }}>Предложения</div>
                            <label>
                                <Field name={'isDiscount'} type={'checkbox'} />
                                Акция
                            </label>
                            <label>
                                <Field name={'isNovelty'} type={'checkbox'} />
                                Новинка
                            </label>
                        </div>
                        <RadioGroup filter={categories.brand} />
                        <RadioGroup filter={categories.gender} />
                        <RadioGroup filter={categories.perfumeType} />
                        <Checkboxes filter={categories.fragrance} />
                        <div></div>
                    </div>
                    {params.id ? (
                        <MainButton
                            title={'Сохранить изменения'}
                            onClick={() => handleSubmit}
                            type='submit'
                            className={s.button}
                        />
                    ) : (
                        <MainButton title={'Добавить продукт'} onClick={() => handleSubmit} type='submit' className={s.button} />
                    )}
                </Form>
            )}
        </Formik>
    );
};
