import type { Content } from './types';

export const mockContent: Content[] = [
  {
    id: '1',
    title: 'The Celestial Weaver',
    slug: 'the-celestial-weaver',
    type: 'story',
    coverImage: '/images/covers/celestial-weaver.jpg',
    synopsis: 'In a world where stars are woven into existence by celestial artisans, a young apprentice discovers she can unravel the fabric of the cosmos itself. As ancient constellations begin to fade, she must choose between saving the universe or the ones she loves.',
    genres: ['fantasy', 'adventure'],
    author: 'Luna Starwright',
    status: 'ongoing',
    chapters: [
      { id: 'c1-1', number: 1, title: 'The First Thread', publishedAt: '2025-12-01', readTime: 12, content: `The loom hummed with starlight.

Aria had spent seventeen years watching her grandmother weave constellations into the night sky, but she had never truly understood the weight of each thread until now. The Celestial Loom stretched before her, its frame carved from the bones of a dying star, its threads spun from pure cosmic essence.

"You must feel the universe breathing," her grandmother whispered, her weathered hands guiding Aria's trembling fingers. "Each star is a heartbeat. Each constellation, a story waiting to be told."

The thread between Aria's fingers pulsed with warmth—not the heat of fire, but the gentle warmth of distant suns reaching across impossible distances. She could feel them: millions of stars, each one a life, a world, a possibility.

"What happens if I pull too hard?" Aria asked.

Her grandmother's eyes—silver with centuries of stargazing—grew somber. "Then you learn why the old weavers called this art both blessing and curse."

That night, as Aria practiced her first simple pattern—a small cluster that would shine above the northern mountains—she noticed something strange. One of the ancient threads, a strand that had held steady for a thousand years, had begun to fray.

The constellation Veridian, the Guardian, was coming undone.

And no one else seemed to notice.` },
      { id: 'c1-2', number: 2, title: 'Fraying Stars', publishedAt: '2025-12-08', readTime: 15, content: `Aria couldn't sleep.

Every time she closed her eyes, she saw the fraying thread—that impossible deterioration in what should have been eternal. The Celestial Weavers had maintained Veridian for over a millennium. Its seven stars had guided sailors, inspired poets, and marked the changing of seasons since before the first kingdoms rose.

Now, three of those stars were dimming.

She crept through the Hall of Threads at midnight, her bare feet silent on the crystal floor. The Loom dominated the central chamber, stretching from floor to ceiling, its threads creating a three-dimensional map of the visible universe.

There. In the northeastern quadrant. Veridian.

Aria reached for the constellation, her fingers hovering just above the threads. Up close, the damage was worse than she'd feared. Not just fraying—unraveling. As if something was actively pulling the stars apart.

"You see it too."

She spun around. A figure emerged from the shadows—a young man about her age, with hair the color of nebulae and eyes that reflected starlight.

"Who are you?" Aria demanded. "How did you get in here?"

"My name is Caelum," he said. "And I've been trying to warn your order for months. But they won't listen." He stepped closer, and Aria saw exhaustion carved into his features. "Something is hunting the old constellations. Something that shouldn't exist."

"What do you mean?"

"I mean," Caelum said, his voice barely above a whisper, "that there's a Starbreaker loose in the cosmos. And if we don't stop it, there won't be any stars left to weave."` },
      { id: 'c1-3', number: 3, title: 'The Starbreaker', publishedAt: '2025-12-15', readTime: 14 },
    ],
    rating: 4.8,
    views: 12500,
    createdAt: '2025-12-01',
    updatedAt: '2025-12-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Neon Samurai',
    slug: 'neon-samurai',
    type: 'manga',
    coverImage: '/images/covers/neon-samurai.jpg',
    synopsis: 'In Neo-Kyoto 2185, the last samurai clan secretly protects humanity from rogue AI spirits. When a young hacker stumbles upon their hidden dojo, she becomes the key to preventing a digital apocalypse.',
    genres: ['sci-fi', 'action'],
    author: 'Takeshi Yamamoto',
    artist: 'Rei Kuroda',
    status: 'ongoing',
    chapters: [
      { id: 'c2-1', number: 1, title: 'Digital Ghosts', publishedAt: '2025-11-15', pages: [] },
      { id: 'c2-2', number: 2, title: 'The Hidden Dojo', publishedAt: '2025-11-22', pages: [] },
      { id: 'c2-3', number: 3, title: 'Code of Honor', publishedAt: '2025-11-29', pages: [] },
      { id: 'c2-4', number: 4, title: 'First Strike', publishedAt: '2025-12-06', pages: [] },
    ],
    rating: 4.9,
    views: 28000,
    createdAt: '2025-11-15',
    updatedAt: '2025-12-06',
    featured: true,
  },
  {
    id: '3',
    title: 'Heartstrings Academy',
    slug: 'heartstrings-academy',
    type: 'webtoon',
    coverImage: '/images/covers/heartstrings.jpg',
    synopsis: 'At a prestigious music academy, talented students compete for fame, fortune, and love. Follow Min-ji as she navigates rivalries, romance, and her own dreams of becoming a world-class violinist.',
    genres: ['romance', 'slice-of-life'],
    author: 'Soo-yeon Park',
    artist: 'Soo-yeon Park',
    status: 'ongoing',
    chapters: [
      { id: 'c3-1', number: 1, title: 'First Day Nerves', publishedAt: '2025-10-01', pages: [] },
      { id: 'c3-2', number: 2, title: 'The Prodigy', publishedAt: '2025-10-08', pages: [] },
      { id: 'c3-3', number: 3, title: 'Practice Room 7', publishedAt: '2025-10-15', pages: [] },
      { id: 'c3-4', number: 4, title: 'Duet', publishedAt: '2025-10-22', pages: [] },
      { id: 'c3-5', number: 5, title: 'Competition Eve', publishedAt: '2025-10-29', pages: [] },
    ],
    rating: 4.7,
    views: 45000,
    createdAt: '2025-10-01',
    updatedAt: '2025-10-29',
    featured: true,
  },
  {
    id: '4',
    title: 'Echoes of the Void',
    slug: 'echoes-of-the-void',
    type: 'story',
    coverImage: '/images/covers/echoes-void.jpg',
    synopsis: 'When humanity receives a message from deep space, linguist Dr. Sarah Chen is recruited to decode it. But the more she translates, the more she realizes the message isnt a greeting—its a warning.',
    genres: ['sci-fi', 'mystery'],
    author: 'Marcus Webb',
    status: 'completed',
    chapters: [
      { id: 'c4-1', number: 1, title: 'First Contact', publishedAt: '2025-08-01', readTime: 18 },
      { id: 'c4-2', number: 2, title: 'The Pattern', publishedAt: '2025-08-15', readTime: 20 },
      { id: 'c4-3', number: 3, title: 'Decryption', publishedAt: '2025-09-01', readTime: 16 },
      { id: 'c4-4', number: 4, title: 'The Warning', publishedAt: '2025-09-15', readTime: 22 },
      { id: 'c4-5', number: 5, title: 'Silence', publishedAt: '2025-10-01', readTime: 25 },
    ],
    rating: 4.6,
    views: 8900,
    createdAt: '2025-08-01',
    updatedAt: '2025-10-01',
  },
  {
    id: '5',
    title: 'Demon Chef',
    slug: 'demon-chef',
    type: 'manga',
    coverImage: '/images/covers/demon-chef.jpg',
    synopsis: 'Banished from the underworld for his terrible cooking, a demon must master the culinary arts in the human world to reclaim his throne. But can a creature of darkness learn to cook with love?',
    genres: ['fantasy', 'slice-of-life'],
    author: 'Hiro Nakamura',
    artist: 'Yuki Tanaka',
    status: 'ongoing',
    chapters: [
      { id: 'c5-1', number: 1, title: 'Banishment', publishedAt: '2025-09-01', pages: [] },
      { id: 'c5-2', number: 2, title: 'Kitchen Nightmare', publishedAt: '2025-09-08', pages: [] },
      { id: 'c5-3', number: 3, title: 'The First Dish', publishedAt: '2025-09-15', pages: [] },
    ],
    rating: 4.5,
    views: 15600,
    createdAt: '2025-09-01',
    updatedAt: '2025-09-15',
  },
  {
    id: '6',
    title: 'Midnight Bloom',
    slug: 'midnight-bloom',
    type: 'webtoon',
    coverImage: '/images/covers/midnight-bloom.jpg',
    synopsis: 'A vampire florist who can only work at night falls for a morning person who loves sunrise jogs. Their impossible schedules might just be the beginning of an impossible love story.',
    genres: ['romance', 'fantasy'],
    author: 'Elena Rosetti',
    artist: 'Elena Rosetti',
    status: 'ongoing',
    chapters: [
      { id: 'c6-1', number: 1, title: 'Night Shift', publishedAt: '2025-11-01', pages: [] },
      { id: 'c6-2', number: 2, title: 'Dawn Runner', publishedAt: '2025-11-08', pages: [] },
      { id: 'c6-3', number: 3, title: 'Twilight Meeting', publishedAt: '2025-11-15', pages: [] },
      { id: 'c6-4', number: 4, title: 'Flower Language', publishedAt: '2025-11-22', pages: [] },
    ],
    rating: 4.8,
    views: 32000,
    createdAt: '2025-11-01',
    updatedAt: '2025-11-22',
    featured: true,
  },
  {
    id: '7',
    title: 'The Last Lighthouse Keeper',
    slug: 'the-last-lighthouse-keeper',
    type: 'story',
    coverImage: '/images/covers/lighthouse.jpg',
    synopsis: 'On a forgotten island at the edge of the world, the last lighthouse keeper guards more than ships from the rocks. She guards the boundary between the living world and what lies beyond.',
    genres: ['horror', 'mystery'],
    author: 'Catherine Moore',
    status: 'ongoing',
    chapters: [
      { id: 'c7-1', number: 1, title: 'The Light', publishedAt: '2025-12-01', readTime: 20 },
      { id: 'c7-2', number: 2, title: 'The Fog', publishedAt: '2025-12-10', readTime: 18 },
    ],
    rating: 4.4,
    views: 5200,
    createdAt: '2025-12-01',
    updatedAt: '2025-12-10',
  },
  {
    id: '8',
    title: 'Arcane Academy',
    slug: 'arcane-academy',
    type: 'manga',
    coverImage: '/images/covers/arcane-academy.jpg',
    synopsis: 'At the worlds most prestigious magic school, students dont just learn spells—they battle for supremacy. Follow Kai as he rises from the lowest rank to challenge the legendary Seven Sages.',
    genres: ['fantasy', 'action', 'adventure'],
    author: 'Jin Zhao',
    artist: 'Lin Wei',
    status: 'ongoing',
    chapters: [
      { id: 'c8-1', number: 1, title: 'The Entrance Exam', publishedAt: '2025-07-01', pages: [] },
      { id: 'c8-2', number: 2, title: 'Rank F', publishedAt: '2025-07-08', pages: [] },
      { id: 'c8-3', number: 3, title: 'First Duel', publishedAt: '2025-07-15', pages: [] },
      { id: 'c8-4', number: 4, title: 'Hidden Power', publishedAt: '2025-07-22', pages: [] },
      { id: 'c8-5', number: 5, title: 'The Sages Challenge', publishedAt: '2025-07-29', pages: [] },
      { id: 'c8-6', number: 6, title: 'Breaking Limits', publishedAt: '2025-08-05', pages: [] },
    ],
    rating: 4.7,
    views: 52000,
    createdAt: '2025-07-01',
    updatedAt: '2025-08-05',
  },
];

export function getContentBySlug(slug: string): Content | undefined {
  return mockContent.find(c => c.slug === slug);
}

export function getContentByType(type: Content['type']): Content[] {
  return mockContent.filter(c => c.type === type);
}

export function getFeaturedContent(): Content[] {
  return mockContent.filter(c => c.featured);
}

export function getLatestContent(limit = 6): Content[] {
  return [...mockContent]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
}

export function getPopularContent(limit = 6): Content[] {
  return [...mockContent]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}
