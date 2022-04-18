export interface IThumb {
    extension: string;
    path: string;
}

export interface ICharacter {
    id: number;
    name: string;
    thumbnail: IThumb | undefined;
    description: string;
}