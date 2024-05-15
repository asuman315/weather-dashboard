export interface PersonalDetailsProps  {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    repeat_password: string;
    [key: string]: string; // Add index signature
  }