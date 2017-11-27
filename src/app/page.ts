export class Page {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    categories: Array<any>;
}