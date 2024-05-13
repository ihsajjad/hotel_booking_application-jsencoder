export type UserDataType = {
  fullName?: string;
  email: string;
  password: string;
};

export type HotelDataType = {
  _id?: string;
  userId: string;
  name: string;
  description: string;
  city: string;
  country: string;
  type: string;
  pricePerNight: number;
  starRating?: number;
  adultCount: number;
  childCount: number;
  facilities: string[];
  images: { label: string; image: string }[];
  lastUpdated: Date;
};
