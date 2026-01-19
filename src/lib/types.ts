export type ContentType = 'story' | 'manga' | 'webtoon';

export type Genre = 
  | 'fantasy' 
  | 'sci-fi' 
  | 'romance' 
  | 'action' 
  | 'mystery' 
  | 'horror' 
  | 'slice-of-life'
  | 'adventure';

export interface Chapter {
  id: string;
  number: number;
  title: string;
  content?: string; // For stories
  pages?: string[]; // For manga/webtoons
  publishedAt: string;
  readTime?: number; // minutes for stories
}

export interface Content {
  id: string;
  title: string;
  slug: string;
  type: ContentType;
  coverImage: string;
  synopsis: string;
  genres: Genre[];
  author: string;
  artist?: string; // For manga/webtoons
  status: 'ongoing' | 'completed' | 'hiatus';
  chapters: Chapter[];
  rating: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
}
