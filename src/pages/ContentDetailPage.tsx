import { Link, useParams, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getContentBySlug } from '@/lib/data';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Eye, 
  Star, 
  User, 
  Calendar,
  ImageIcon,
  Scroll,
  Play,
  ChevronRight
} from 'lucide-react';

const typeIcons = {
  story: Scroll,
  manga: BookOpen,
  webtoon: ImageIcon,
};

const typeLabels = {
  story: 'Short Story',
  manga: 'Manga',
  webtoon: 'Webtoon',
};

export default function ContentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? getContentBySlug(slug) : undefined;

  if (!content) {
    return <Navigate to="/404" replace />;
  }

  const TypeIcon = typeIcons[content.type];
  const totalReadTime = content.chapters.reduce((acc, ch) => acc + (ch.readTime || 0), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div 
              className="h-full w-full bg-secondary"
              style={{
                backgroundImage: `url(${content.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(20px) brightness(0.3)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8">
            {/* Back Button */}
            <Link to="/browse" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Library
            </Link>

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              {/* Cover Image */}
              <div className="flex-shrink-0">
                <div 
                  className="w-full max-w-xs mx-auto lg:mx-0 aspect-[2/3] rounded-xl bg-secondary border border-border/50 overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${content.coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <TypeIcon className="h-24 w-24 text-muted-foreground/30" />
                </div>
              </div>

              {/* Content Info */}
              <div className="flex-1">
                {/* Type Badge */}
                <Badge variant="secondary" className="mb-4">
                  <TypeIcon className="h-3 w-3 mr-1" />
                  {typeLabels[content.type]}
                </Badge>

                {/* Title */}
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  {content.title}
                </h1>

                {/* Author/Artist */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {content.author}
                  </span>
                  {content.artist && content.artist !== content.author && (
                    <span className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      {content.artist}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="mt-6 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-foreground">{content.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="h-5 w-5" />
                    <span>{content.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="h-5 w-5" />
                    <span>{content.chapters.length} chapters</span>
                  </div>
                  {totalReadTime > 0 && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-5 w-5" />
                      <span>{totalReadTime} min read</span>
                    </div>
                  )}
                </div>

                {/* Status */}
                <div className="mt-4">
                  <Badge 
                    variant={content.status === 'completed' ? 'default' : 'secondary'}
                    className={content.status === 'completed' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {content.status === 'completed' ? 'Completed' : content.status === 'hiatus' ? 'On Hiatus' : 'Ongoing'}
                  </Badge>
                </div>

                {/* Genres */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.genres.map((genre) => (
                    <Link
                      key={genre}
                      to={`/browse?genre=${genre}`}
                      className="rounded-full px-3 py-1 text-sm capitalize bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>

                {/* Synopsis */}
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-foreground mb-2">Synopsis</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.synopsis}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {content.chapters.length > 0 && (
                    <Link to={`/read/${content.slug}/1`}>
                      <Button size="lg" className="glow-primary">
                        <Play className="h-4 w-4 mr-2" />
                        Start Reading
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters List */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Chapters ({content.chapters.length})
            </h2>

            <div className="space-y-2">
              {content.chapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  to={`/read/${content.slug}/${chapter.number}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground font-semibold">
                      {chapter.number}
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {chapter.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(chapter.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        {chapter.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {chapter.readTime} min
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
