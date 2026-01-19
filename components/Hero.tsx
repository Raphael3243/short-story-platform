import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center lg:py-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
          <Sparkles className="h-4 w-4" />
          <span>Discover New Worlds</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block text-foreground">Stories That</span>
          <span className="block gradient-text text-glow mt-2">Transcend Reality</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Immerse yourself in captivating short stories, stunning manga, and 
          breathtaking webtoons crafted by talented creators from around the world.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/browse">
            <Button size="lg" className="glow-primary group">
              Start Reading
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/browse?type=story">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
              Explore Stories
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
          <div>
            <p className="text-3xl font-bold gradient-text">50+</p>
            <p className="text-sm text-muted-foreground mt-1">Original Works</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">100k+</p>
            <p className="text-sm text-muted-foreground mt-1">Monthly Readers</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">20+</p>
            <p className="text-sm text-muted-foreground mt-1">Talented Creators</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
