export interface Blog {
  title: string;
  description: string;
  author: string;
  publishedOn: string;
  tags: string[];
  links: {
    label: string;
    url: string;
  }[];
}
