import { IFilmeApi } from './IFilmeApi.model';
/* eslint-disable @typescript-eslint/naming-convention */
export interface IListaFilmes {
  page: number;
  results: IFilmeApi[];
  total_results: number;
  total_pages: number;
}
