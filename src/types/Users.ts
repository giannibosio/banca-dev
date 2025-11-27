export interface Movimento {
  data: string;
  descrizione: string;
  importo: number;
  categoria: string;
}

export default interface User {
  id: number;
  pin: string;
  nome: string;
  cognome: string;
  numeroConto: string;
  saldoContabile: number;
  saldoDisponibile: number;
  disponibilitaTotale?: number;
  movimentiRecenti?: Movimento[];
}
