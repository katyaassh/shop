import axios, {AxiosResponse} from "axios";
import {IGenderItem} from "../models/gender-item";
import {IGendersResponse} from "../models/genders-response";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/filters/'
})

export const filtersAPI = {
    getGenders(): Promise<IGenderItem[]> {
        return instance.get(`gender`).then((response: AxiosResponse<IGendersResponse>): IGenderItem[] => {
            return response.data.items;
        })
    }
}
