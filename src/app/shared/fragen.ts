export interface Frage {
    id: number;
    fragentext: string;
    antworten: Antwort[];
    type:string;
}

export interface Antwort {
// anid: number;
    antwort: string;
    richtig: boolean;
    gebAntwort?: boolean;
    
}

