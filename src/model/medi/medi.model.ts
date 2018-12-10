//Datenbankmodell für die Medikamente
export interface Medi {
    key?: string;
    title: string;
    dosierung: string;
    menge: string;
    date: Date;
}