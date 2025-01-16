export type UserRegistration = {
  age: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  password: string;
};
export type FeedbackForm = {
  fullName: string;
  feedback: string;
  rating: string;
  subscribe: boolean;
};
export type EventRegistration = {
  eventName: string;
  date: string;
  time: string;
  location: string;
  members: any;
  participants: number;
  preferences: any;
};
export type PostFormRequest =
  | UserRegistration
  | FeedbackForm
  | EventRegistration;

export interface PostFormResponse {
  message: string;
  filename: string;
}
