import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StoryInterface {
  id?: string;
  title: string;
  body: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface StoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  body?: string;
  user_id?: string;
}
