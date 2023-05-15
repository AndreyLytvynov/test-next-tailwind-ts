type IGeoLocation = {
  lat: string;
  lng: string;
};

type IAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoLocation;
};

type ICompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
};
