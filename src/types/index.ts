import React from 'react';
import { IFilm } from '@models/IFilm';

export interface IBurgerMenu {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IElasticSearch {
    value: string;
    showSearch: boolean;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IFilmComponent {
    image: string;
    year: number;
    director: string;
    title: string;
    video: string;
    id: number;
}
export interface IMenu {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IModal {
    onClose: () => void;
    src: string;
}
export interface IParams {
    page: number;
    ['genres.name']: string | undefined;
    limit: number;
    search: string;
}
export interface IResultFilms {
    docs: IFilm[];
    page: number;
    limit: number;
    total: number;
}
export interface IResultCategories {
    name: string;
    slug: string;
}
export interface IResultNames {
    docs: { enName: string; name: string }[];
    total: number;
    page: number;
    limit: number;
    pages: number;
}
export interface FilterParamsState {
    category: string;
    search: string;
}
export interface ThemeState {
    isDarkTheme: boolean;
}
