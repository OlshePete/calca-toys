export interface SearchResult {
  id: number;
  title: string;
  description: string;
  url: string;
  type: 'product' | 'category';
}
