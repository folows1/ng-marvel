import { IThumb } from "./thumb";

export interface IItem {
    id: number;
    thumbnail: IThumb | undefined;
    name?: string;
    title?: string;
    fullName?: string;
}