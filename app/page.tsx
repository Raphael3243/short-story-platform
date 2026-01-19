import Link from 'next/link';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContentCard } from '@/components/ContentCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getFeaturedContent, getLatestContent, getPopularContent } from '@/lib/data';
import { ArrowRight, BookOpen, ImageIcon, Scroll, TrendingUp, Clock, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'Short Stories',
    description: 'Immersive narratives that transport you to new worlds',
    icon: Scroll,
    href: '/browse?type=story',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Manga',
    description: 'Japanese-style comics with stunning artwork',
    icon: BookOpen,
    href: '/browse?type=manga',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Webtoons',
    description: 'Vertical-scroll comics optimized for mobile reading',
    icon: ImageIcon,
    href: '/browse?type=webtoon',
    color: 'from-violet-500/20 to-indigo-500/20',
  },
];

export default function HomePage() {
  const featuredContent = getFeaturedContent();
  const latestContent = getLatestContent(6);
  const popularContent = getPopularContent(4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Categories Section */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Explore Our Library
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Discover thousands of stories across multiple formats, each crafted with care and passion
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:glow-primary"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center rounded-xl bg-secondary p-3 mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary">
                      Browse collection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Featured Works
                </h2>
              </div>
              <Link href="/browse">
                <Button variant="ghost" className="group">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {featuredContent.map((content) => (
                <ContentCard key={content.id} content={content} featured />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Latest Updates
                </h2>
              </div>
              <Link href="/browse">
                <Button variant="ghost" className="group">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
              {latestContent.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Now */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Popular Now
                </h2>
              </div>
              <Link href="/browse">
                <Button variant="ghost" className="group">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {popularContent.map((content, index) => (
                <div key={content.id} className="relative">
                  <div className="absolute -top-3 -left-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold glow-primary">
                    {index + 1}
                  </div>
                  <ContentCard content={content} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start exploring our vast library of stories, manga, and webtoons today. 
              New content added every week.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/browse">
                <Button size="lg" className="glow-primary">
                  Browse Library
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
