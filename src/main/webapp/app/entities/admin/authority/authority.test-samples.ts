import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7ff0cb9d-6782-4a7a-a972-966b31be3aba',
};

export const sampleWithPartialData: IAuthority = {
  name: '46e273c8-1af9-4e89-9357-a1688ad985e9',
};

export const sampleWithFullData: IAuthority = {
  name: 'd882e7e7-bb2c-4e49-af9c-872fdb014eab',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
