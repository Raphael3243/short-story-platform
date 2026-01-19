import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getContentBySlug } from '@/lib/data';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  List, 
  Settings, 
  Home,
  X,
  Minus,
  Plus,
  BookOpen
} from 'lucide-react';

export default function ReaderPage() {
  const { slug, chapter: chapterNum } = useParams<{ slug: string; chapter: string }>();
  const navigate = useNavigate();
  const content = slug ? getContentBySlug(slug) : undefined;
  const chapterIndex = chapterNum ? parseInt(chapterNum, 10) - 1 : 0;

  const [showControls, setShowControls] = useState(true);
  const [showChapterList, setShowChapterList] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);

  // Hide controls after inactivity
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleActivity = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    
    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  const hasPrevChapter = chapterIndex > 0;
  const hasNextChapter = content ? chapterIndex < content.chapters.length - 1 : false;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && hasPrevChapter) {
        navigate(`/read/${slug}/${chapterIndex}`);
      } else if (e.key === 'ArrowRight' && hasNextChapter) {
        navigate(`/read/${slug}/${chapterIndex + 2}`);
      } else if (e.key === 'Escape') {
        navigate(`/read/${slug}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slug, chapterIndex, navigate, hasPrevChapter, hasNextChapter]);

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Content not found</h1>
          <Link to="/browse" className="mt-4 inline-block text-primary hover:underline">
            Return to library
          </Link>
        </div>
      </div>
    );
  }

  const chapter = content.chapters[chapterIndex];

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Chapter not found</h1>
          <Link to={`/read/${slug}`} className="mt-4 inline-block text-primary hover:underline">
            Return to {content.title}
          </Link>
        </div>
      </div>
    );
  }

  // For stories, we show text content. For manga/webtoons, we'd show images.
  const isStory = content.type === 'story';

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 glass transition-transform duration-300 ${
          showControls ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Link to={`/read/${slug}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-foreground truncate max-w-[200px]">
                {content.title}
              </p>
              <p className="text-xs text-muted-foreground">
                Chapter {chapter.number}: {chapter.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowChapterList(true)}
            >
              <List className="h-5 w-5" />
            </Button>
            {isStory && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="h-5 w-5" />
              </Button>
            )}
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen pt-16 pb-20">
        {isStory ? (
          // Story Reader
          <article 
            className="mx-auto max-w-3xl px-4 py-8 sm:px-8"
            style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}
          >
            <h1 className="text-2xl font-bold text-foreground mb-2 sm:text-3xl">
              Chapter {chapter.number}: {chapter.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-4 border-b border-border/50">
              <span>{new Date(chapter.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
              {chapter.readTime && <span>{chapter.readTime} min read</span>}
            </div>

            {chapter.content ? (
              <div className="prose prose-invert max-w-none">
                {chapter.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Chapter content coming soon...
                </p>
              </div>
            )}
          </article>
        ) : (
          // Manga/Webtoon Reader (placeholder for image content)
          <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="text-center py-20 bg-card rounded-xl border border-border/50">
              <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Chapter {chapter.number}: {chapter.title}
              </h2>
              <p className="text-muted-foreground">
                Image content would be displayed here for {content.type}
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav 
        className={`fixed bottom-0 left-0 right-0 z-50 glass transition-transform duration-300 ${
          showControls ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {hasPrevChapter ? (
            <Link to={`/read/${slug}/${chapterIndex}`}>
              <Button variant="outline" className="gap-2 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous</span>
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
            </Button>
          )}

          <div className="text-sm text-muted-foreground">
            {chapter.number} / {content.chapters.length}
          </div>

          {hasNextChapter ? (
            <Link to={`/read/${slug}/${chapterIndex + 2}`}>
              <Button variant="outline" className="gap-2 bg-transparent">
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2 bg-transparent">
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </nav>

      {/* Chapter List Drawer */}
      {showChapterList && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowChapterList(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card border-l border-border overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card">
              <h2 className="font-semibold text-foreground">Chapters</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowChapterList(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-2">
              {content.chapters.map((ch) => (
                <Link
                  key={ch.id}
                  to={`/read/${slug}/${ch.number}`}
                  onClick={() => setShowChapterList(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    ch.number === chapter.number
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-secondary text-foreground'
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-sm font-medium">
                    {ch.number}
                  </span>
                  <span className="flex-1 truncate">{ch.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Settings Drawer */}
      {showSettings && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card border-l border-border">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">Reading Settings</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowSettings(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4 space-y-6">
              {/* Font Size */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Font Size: {fontSize}px
                </label>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    type="range"
                    min="12"
                    max="28"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="flex-1 accent-primary"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setFontSize(Math.min(28, fontSize + 2))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Line Height */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Line Height: {lineHeight.toFixed(1)}
                </label>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setLineHeight(Math.max(1.2, lineHeight - 0.2))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    type="range"
                    min="1.2"
                    max="2.4"
                    step="0.2"
                    value={lineHeight}
                    onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                    className="flex-1 accent-primary"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setLineHeight(Math.min(2.4, lineHeight + 0.2))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
