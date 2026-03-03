export interface LocalizedString {
  en: string;
  tp: string;
}

export interface BookIdentifiers {
  asinKindle?: string;
  asinPrint?: string;
  isbn13Print?: string;
}

export interface BookAssets {
  cover: string;
  promo: string;
}

export interface BookLinks {
  learnMore: string;
  amazonKindle?: string | null;
  amazonPrint?: string | null;
  downloadPdf?: string | null;
  downloadEpub?: string | null;
  teaserVideoId?: string | null;
}

export interface BookFlags {
  isFree: boolean;
  isPublished: boolean;
}

export interface BookMeta {
  dictionaryKey: string;
  seoTitleKey: string;
  seoDescriptionKey: string;
}

export interface Book {
  slug: string;
  id: string; // Backward-compatible alias for legacy components.
  type: 'commercial' | 'gift';
  title: LocalizedString;
  author: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  assets: BookAssets;
  links: BookLinks;
  flags: BookFlags;
  meta: BookMeta;
  identifiers?: BookIdentifiers;

  // Legacy field aliases kept to avoid breaking existing UI components.
  coverImage: string;
  promoImage: string;
  amazonKindleUrl?: string;
  amazonPrintUrl?: string;
  downloadPdfUrl?: string;
  downloadEpubUrl?: string;
  teaserVideoId?: string;
}

type BookSeed = Omit<
  Book,
  | 'id'
  | 'coverImage'
  | 'promoImage'
  | 'amazonKindleUrl'
  | 'amazonPrintUrl'
  | 'downloadPdfUrl'
  | 'downloadEpubUrl'
  | 'teaserVideoId'
>;

const seeds: BookSeed[] = [
  {
    slug: 'dao-de-jing',
    type: 'commercial',
    title: {
      en: 'Dao De Jing — in toki pona',
      tp: 'lipu Dao De Jing lon toki pona',
    },
    author: {
      en: 'Laozi',
      tp: 'jan Losi',
    },
    shortDescription: {
      en: 'Foundational Daoist text in the Chinese Wisdom in toki pona format.',
      tp: 'lipu open pi sona Dao lon nasin Chinese Wisdom lon toki pona.',
    },
    longDescription: {
      en: 'Content draft pending. Data structure and routes are fixed for this title.',
      tp: 'ijo pi toki suli li kama lon tenpo kama. nasin data en nasin URL li awen pona.',
    },
    assets: {
      cover: '/assets/books/dao-de-jing/cover.svg',
      promo: '/assets/books/dao-de-jing/promo.svg',
    },
    links: {
      learnMore: '/books/dao-de-jing',
      amazonKindle: null,
      amazonPrint: null,
      teaserVideoId: null,
    },
    flags: {
      isFree: false,
      isPublished: false,
    },
    meta: {
      dictionaryKey: 'dao-de-jing',
      seoTitleKey: 'collection.dao-de-jing.title',
      seoDescriptionKey: 'collection.dao-de-jing.shortDesc',
    },
  },
  {
    slug: 'sunzi',
    type: 'commercial',
    title: {
      en: 'Sunzi — in toki pona',
      tp: 'lipu Sunzi lon toki pona',
    },
    author: {
      en: 'Sunzi',
      tp: 'jan Sunzi',
    },
    shortDescription: {
      en: 'Classical strategic text adapted to the same bilingual landing system.',
      tp: 'lipu sona pi nasin utala lon nasin bilingual sama ni.',
    },
    longDescription: {
      en: 'Content draft pending. Data structure and routes are fixed for this title.',
      tp: 'ijo pi toki suli li kama lon tenpo kama. nasin data en nasin URL li awen pona.',
    },
    assets: {
      cover: '/assets/books/sunzi/cover.svg',
      promo: '/assets/books/sunzi/promo.svg',
    },
    links: {
      learnMore: '/books/sunzi',
      amazonKindle: null,
      amazonPrint: null,
      teaserVideoId: null,
    },
    flags: {
      isFree: false,
      isPublished: false,
    },
    meta: {
      dictionaryKey: 'sunzi',
      seoTitleKey: 'collection.sunzi.title',
      seoDescriptionKey: 'collection.sunzi.shortDesc',
    },
  },
  {
    slug: 'mozi-universal-love',
    type: 'commercial',
    title: {
      en: 'Mozi: Universal Love — in toki pona',
      tp: 'lipu Mozi: jan ale o olin lon toki pona',
    },
    author: {
      en: 'Mozi',
      tp: 'jan Mozi',
    },
    shortDescription: {
      en: 'Mozi-focused volume with canonical slug and stable asset routing.',
      tp: 'lipu Mozi li jo e slug pona en nasin awen pi sitelen.',
    },
    longDescription: {
      en: 'Content draft pending. Data structure and routes are fixed for this title.',
      tp: 'ijo pi toki suli li kama lon tenpo kama. nasin data en nasin URL li awen pona.',
    },
    assets: {
      cover: '/assets/books/mozi-universal-love/cover.svg',
      promo: '/assets/books/mozi-universal-love/promo.svg',
    },
    links: {
      learnMore: '/books/mozi-universal-love',
      amazonKindle: null,
      amazonPrint: null,
      teaserVideoId: null,
    },
    flags: {
      isFree: false,
      isPublished: false,
    },
    meta: {
      dictionaryKey: 'mozi-universal-love',
      seoTitleKey: 'collection.mozi-universal-love.title',
      seoDescriptionKey: 'collection.mozi-universal-love.shortDesc',
    },
  },
];

export const books: Book[] = seeds.map((book) => ({
  ...book,
  id: book.slug,
  coverImage: book.assets.cover,
  promoImage: book.assets.promo,
  amazonKindleUrl: book.links.amazonKindle ?? undefined,
  amazonPrintUrl: book.links.amazonPrint ?? undefined,
  downloadPdfUrl: book.links.downloadPdf ?? undefined,
  downloadEpubUrl: book.links.downloadEpub ?? undefined,
  teaserVideoId: book.links.teaserVideoId ?? undefined,
}));

