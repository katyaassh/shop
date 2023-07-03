import s from './ProductForm.module.scss';
import { Field, Form, Formik } from 'formik';
import { MainButton } from '../../../../../../../common/MainButton/MainButton';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../../../../../../../store/selectors/filters.selectors';
import { ICategory } from '../../../../../../../../models/category';
import { TextFields } from './commons/TextFields';
import { EditProductValues } from '../../../../../../../../models/edit-product-values';
import { productsAPI } from '../../../../../../../../api/products.api';
import { fillProductFormData } from '../../../../../../../../helpers/fillProductFormData';
import { useParams } from 'react-router-dom';
import { ImageField } from './commons/ImageField';
import { ICategories } from '../../../../../../../../models/categories';
import { useInitialProductValues } from '../../../../../../../../hooks/useInitialProductValues';
import { CategoryItems } from './commons/CategoryItems/CategoryItems';

export const ProductForm = (): JSX.Element => {
    const params = useParams();

    const filters: ICategory[] = useSelector(selectFilters);

    const categories = filters.reduce((result, category: ICategory) => {
        return {
            ...result,
            [category.category]: category,
        };
    }, {} as ICategories);

    const initialValues = useInitialProductValues();

    const onAddProductSubmit = async (values: EditProductValues): Promise<void> => {
        const formData = new FormData();
        fillProductFormData(values, formData);
        await productsAPI.addProduct(formData);
        alert('Продукт успешно добавлен!');
    };
    const onUpdateProductSubmit = async (values: EditProductValues): Promise<void> => {
        const formData = new FormData();
        fillProductFormData(values, formData);
        await productsAPI.updateProduct(formData, params.id);
        alert('Продукт успешно обновлен!');
    };

    const onSubmit = async (values: EditProductValues): Promise<void> => {
        if (params.id) {
            await onUpdateProductSubmit(values);
        } else {
            await onAddProductSubmit(values);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true}>
            <Form>
                <div className={s.topFields}>
                    <ImageField />
                    <TextFields />
                </div>
                <div className={s.filters}>
                    <div className={s.specialOffers}>
                        <div className={s.title}>Предложения</div>
                        <label>
                            <Field name={'isDiscount'} type={'checkbox'} />
                            Акция
                        </label>
                        <label>
                            <Field name={'isNovelty'} type={'checkbox'} />
                            Новинка
                        </label>
                    </div>
                    <CategoryItems filter={categories.brand} type={'radio'} />
                    <CategoryItems filter={categories.gender} type={'radio'} />
                    <CategoryItems filter={categories.perfumeType} type={'radio'} />
                    <CategoryItems filter={categories.fragrance} type={'checkbox'} />
                </div>
                {params.id ? (
                    <MainButton type='submit' className={s.button}>
                        Сохранить изменения
                    </MainButton>
                ) : (
                    <MainButton type='submit' className={s.button}>
                        Добавить продукт
                    </MainButton>
                )}
            </Form>
        </Formik>
    );
};
