import { StudentInterface } from 'interfaces/student';
import { ContentInterface } from 'interfaces/content';
import { GetQueryInterface } from 'interfaces';

export interface LessonInterface {
  id?: string;
  title: string;
  content_id: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  content?: ContentInterface;
  _count?: {
    student?: number;
  };
}

export interface LessonGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content_id?: string;
}
