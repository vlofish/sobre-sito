import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SOBRES_MOCK } from './mocked-data/sobres-mock';
import { ISobres } from '../interfaces/isobres';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const sobres: ISobres[] = SOBRES_MOCK;

    return { sobres };
  }
}
