import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Eye, Star, ImageIcon, Scroll } from 'lucide-react';
import type { Content } from '@/lib/types';

interface ContentCardProps {
  content: Content;
  featured?: boolean;
}

const typeIcons = {
  story: Scroll,
  manga: BookOpen,
  webtoon: ImageIcon,
};

const typeLabels = {
  story: 'Story',
  manga: 'Manga',
  webtoon: 'Webtoon',
};

export function ContentCard({ content, featured = false }: ContentCardProps) {
  const TypeIcon = typeIcons[content.type];

  return (
    <Link to={`/read/${content.slug}`} className="group block">
      <article
        className={`relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:glow-primary ${
          featured ? 'aspect-[3/4]' : 'aspect-[2/3]'
        }`}
      >
        {/* Cover Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          <div 
            className="h-full w-full bg-secondary flex items-center justify-center"
            style={{
              backgroundImage: `url(${content.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Fallback icon if no image */}
            <TypeIcon className="h-16 w-16 text-muted-foreground/30" />
          </div>
        </div>

        {/* Content Type Badge */}
        <div className="absolute top-3 left-3 z-20">
          <Badge variant="secondary" className="glass gap-1">
            <TypeIcon className="h-3 w-3" />
            {typeLabels[content.type]}
          </Badge>
        </div>

        {/* Status Badge */}
        {content.status === 'completed' && (
          <div className="absolute top-3 right-3 z-20">
            <Badge className="bg-accent text-accent-foreground">Complete</Badge>
          </div>
        )}

        {/* Content Info */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
          <h3 className="font-semibold text-lg text-foreground group-hover:gradient-text transition-all line-clamp-2">
            {content.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mt-1">
            {content.author}
            {content.artist && content.artist !== content.author && ` / ${content.artist}`}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500" />
              {content.rating.toFixed(1)}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {content.views >= 1000 ? `${(content.views / 1000).toFixed(1)}k` : content.views}
            </span>
            <span>{content.chapters.length} ch.</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {content.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="text-xs px-2 py-0.5 rounded-full bg-secondary/80 text-secondary-foreground capitalize"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
