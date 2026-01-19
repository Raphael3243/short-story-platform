import React from "react"
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContentCard } from '@/components/ContentCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockContent } from '@/lib/data';
import type { ContentType, Genre } from '@/lib/types';
import { Search, Filter, BookOpen, ImageIcon as Image, Scroll, X, SlidersHorizontal } from 'lucide-react';

const contentTypes: { value: ContentType | 'all'; label: string; icon: React.ElementType }[] = [
  { value: 'all', label: 'All', icon: SlidersHorizontal },
  { value: 'story', label: 'Stories', icon: Scroll },
  { value: 'manga', label: 'Manga', icon: BookOpen },
  { value: 'webtoon', label: 'Webtoons', icon: Image },
];

const genres: Genre[] = ['fantasy', 'sci-fi', 'romance', 'action', 'mystery', 'horror', 'slice-of-life', 'adventure'];

const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'title', label: 'A-Z' },
];

export default function BrowsePage() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') as ContentType | null;

  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedType, setSelectedType] = React.useState<ContentType | 'all'>(initialType || 'all');
  const [selectedGenres, setSelectedGenres] = React.useState<Genre[]>([]);
  const [sortBy, setSortBy] = React.useState('latest');
  const [showFilters, setShowFilters] = React.useState(false);

  const filteredContent = React.useMemo(() => {
    let filtered = [...mockContent];

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter((c) => c.type === selectedType);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.author.toLowerCase().includes(query) ||
          c.synopsis.toLowerCase().includes(query)
      );
    }

    // Filter by genres
    if (selectedGenres.length > 0) {
      filtered = filtered.filter((c) =>
        selectedGenres.some((genre) => c.genres.includes(genre))
      );
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'latest':
      default:
        filtered.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    }

    return filtered;
  }, [searchQuery, selectedType, selectedGenres, sortBy]);

  const toggleGenre = (genre: Genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedGenres([]);
    setSortBy('latest');
  };

  const hasActiveFilters = searchQuery || selectedType !== 'all' || selectedGenres.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              Browse Library
            </h1>
            <p className="mt-2 text-muted-foreground">
              Discover your next favorite story from our collection
            </p>
          </div>

          {/* Search and Filters Bar */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by title, author, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Type Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {contentTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={selectedType === type.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(type.value)}
                  className={selectedType === type.value ? 'glow-primary' : ''}
                >
                  <type.icon className="h-4 w-4 mr-1" />
                  {type.label}
                </Button>
              ))}

              <div className="ml-auto flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className={showFilters ? 'bg-secondary' : ''}
                >
                  <Filter className="h-4 w-4 mr-1" />
                  Filters
                  {selectedGenres.length > 0 && (
                    <Badge variant="secondary" className="ml-1">
                      {selectedGenres.length}
                    </Badge>
                  )}
                </Button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-8 rounded-md border border-border bg-card px-3 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Genre Filters */}
            {showFilters && (
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-foreground">Genres</h3>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all filters
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => toggleGenre(genre)}
                      className={`rounded-full px-3 py-1 text-sm capitalize transition-all ${
                        selectedGenres.includes(genre)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredContent.length} {filteredContent.length === 1 ? 'result' : 'results'}
            </p>
          </div>

          {/* Content Grid */}
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredContent.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-foreground">No results found</h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                Try adjusting your search or filters to find what you are looking for
              </p>
              <Button variant="outline" onClick={clearFilters} className="mt-4 bg-transparent">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
