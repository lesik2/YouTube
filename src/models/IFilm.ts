export interface IFilm {
    id: number;
    name: string;
    poster: { url: string } | undefined;
    videos: { trailers: Array<{ url: string }> } | undefined;
    persons: { enName: string; name: string }[];
    enName: string | null;
    year: number;
}
