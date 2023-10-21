export class Podcast {
    title: string;
    link: string;
    tags: string[];
  
    constructor(title: string, link: string, tags: string[])
    {
        this.title = title;
        this.link = link;
        this.tags = tags;
    }
  }
  