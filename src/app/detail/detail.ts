import { IItem } from "../item";
import { IThumb } from "../thumb";

export interface IDetail {
    id: number;
    name: string;
    description: string;
    thumbnail: IThumb | undefined;
    characters?: IItem[];
    comics?: any[];
}