export interface IUser {
    licenseNumber?: string;
}

export interface IToken {
  salt: string;
  to: string;
  message: string;
  longitude: string;
  latitude: string;
}
