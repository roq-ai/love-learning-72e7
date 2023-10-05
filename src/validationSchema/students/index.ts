import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  progress: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  lesson_id: yup.string().nullable().required(),
});
