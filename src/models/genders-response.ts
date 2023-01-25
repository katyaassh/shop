import {IGenderItem} from "./gender-item";

export interface IGendersResponse {
    category: string
    name: string
    items: IGenderItem[]
}
