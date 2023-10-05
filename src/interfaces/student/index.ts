import { UserInterface } from 'interfaces/user';
import { LessonInterface } from 'interfaces/lesson';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  user_id: string;
  lesson_id: string;
  progress?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  lesson?: LessonInterface;
  _count?: {};
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  lesson_id?: string;
}
