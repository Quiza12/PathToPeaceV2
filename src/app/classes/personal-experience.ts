export class PersonalExperience {
    title: string;
    tags: string[];
    preamble: string;
    id: string;
    content: string;
  
    constructor(title: string, tags: string[], preamble: string, id: string, content: string)
    {
        this.title = title;
        this.tags = tags;
        this.preamble = preamble;
        this.id = id;
        this.content = content;
    }
  }
  