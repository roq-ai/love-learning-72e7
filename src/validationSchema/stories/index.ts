import * as yup from 'yup';

export const storyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
