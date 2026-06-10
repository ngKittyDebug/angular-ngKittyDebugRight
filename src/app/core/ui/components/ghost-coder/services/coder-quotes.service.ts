import { Service } from '@angular/core';
import { firestore } from '@env/environment';
import { collection, getDocs, query, where } from 'firebase/firestore';

export interface Quote {
  lang: string;
  text: string;
}

@Service()
export class CoderQuotesService {
  private readonly cache = new Map<string, Quote[]>();

  public async getQuotes(lang: string): Promise<Quote[]> {
    if (this.cache.has(lang)) {
      return this.cache.get(lang)!;
    }

    const q = query(collection(firestore, 'coder_quotes'), where('lang', '==', lang));
    const snapshot = await getDocs(q);

    const quotes = snapshot.docs.map((document_) => {
      const data = document_.data();

      return {
        lang: data['lang'] as string,
        text: data['text'] as string,
      };
    });

    this.cache.set(lang, quotes);
    console.log(quotes);

    return quotes;
  }

  public getRandomQuote(quotes: Quote[]): Quote {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}
