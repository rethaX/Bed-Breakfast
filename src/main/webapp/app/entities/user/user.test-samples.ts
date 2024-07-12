import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 2553,
  login: 'nPigt',
};

export const sampleWithPartialData: IUser = {
  id: 10655,
  login: '094cUL',
};

export const sampleWithFullData: IUser = {
  id: 18619,
  login: '`rI5I@ZwY70\\,l\\pNEC\\.W3l\\LFWbBv2\\6z',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
