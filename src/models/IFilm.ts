export interface IFilm {
    id: number;
    name: string;
    poster: { url: string };
    videos: { trailers: string[] };
    persons: { enName: string; name: string }[];
    enName: string | null;
    year: number;
}
