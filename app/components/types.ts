export interface Content  {label:string,
    pro:boolean}

export interface Linktype  {
    key: string;
    icon: string;
    label: string;
    content: Content[];
    title: string;
    
  }

 export interface MessageType {
    key : string
    title: string;
    content:string;

 }