import * as yup from 'yup';

export const lessonValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content_id: yup.string().nullable().required(),
});
