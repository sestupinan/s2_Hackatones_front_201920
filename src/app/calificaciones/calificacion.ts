import {Hackaton} from "../hackatones/hackatones" ;
export class Calificacion {
  
  /**
      * El id de la calificacion
      */
  id: number;

  /**
      * La calificacion dada en la calificacion
      */
  calificacion: number;

  /**
      * El comentario de la calificacion
      */
  comentario: string;

  /**
      * La hackaton
      */
  hackaton: Hackaton;
}