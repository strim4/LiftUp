//Datenbankmodell für den Schmerznotiz
export interface Note {
    key?: string;
    
    note: string;
    date: Date;
    
}