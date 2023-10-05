import { LessonInterface } from 'interfaces/lesson';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  body: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  lesson?: LessonInterface[];
  user?: UserInterface;
  _count?: {
    lesson?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  body?: string;
  user_id?: string;
}
