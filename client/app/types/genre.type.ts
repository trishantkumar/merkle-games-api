export interface Link {
  href: string;
  rel: string;
  method: string;
  description: string;
}

export interface Genre {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface GenresResponse {
  data: Genre[];
  _links: Link[];
}
