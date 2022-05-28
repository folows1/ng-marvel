import { IThumb } from "./thumb";

interface AItem {
    items: IItem[];
    available: number;
}

export interface IItem {
    id: number;
    thumbnail?: IThumb;
    description?: string;
    name?: string;
    title?: string;
    fullName?: string;
    comics?: AItem;
    series?: AItem;
    events?: AItem;
    characters?: AItem;
    creators?: AItem;
    stories?: AItem;
    startYear?: number;
    endYear?: number;
}