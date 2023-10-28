export class PersonalExperience {
    id: string;
    title: string;
    excerpt: string;
    tags: string[];
    content: string;
  
    constructor(id: string, title: string, excerpt: string, tags: string[], content: string) {
        this.id = id;
        this.title = title;
        this.excerpt = excerpt;
        this.tags = tags;
        this.content = content;
    }
  }
  