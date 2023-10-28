export class PeaceOfAdvice {
    title: string;
    link: string;
    tags: string[];
    description: string;
  
    constructor(title: string, link: string, tags: string[], description: string) {
        this.title = title;
        this.tags = tags;
        this.link = link;
        this.description = description;
    }
  }
  