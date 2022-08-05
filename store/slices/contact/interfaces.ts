// declaring the types for our state
export interface ContactState  {
  contact?: ContactInt;
  isLoading?: boolean;
};

export interface ContactInt  {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  [key: string]: any;
}