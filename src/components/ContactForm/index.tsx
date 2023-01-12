import { useRef, useState } from 'react';

import { contactFields } from 'constants/forms';
import { sendEmailSchema as validationSchema } from 'constants/validation';

import emailjs from '@emailjs/browser';

import { Button, TextField } from '@mui/material';

import Grid from '@mui/material/Grid';

import { useFormik } from 'formik';
import { useAlertMessage } from 'hooks';
import { TfHeadline } from 'themeforest-design-system-react';
import { reduceFieldsName } from 'utils';

import AlertMessage from 'components/AlertMessage';

import { Props } from './types';

const ContactForm = ({ variant }: Props) => {
  const [alertProps, setSuccess, setError] = useAlertMessage(5000);
  const [disabled, setDisabled] = useState(false);
  const initialValues = reduceFieldsName(contactFields);

  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setDisabled(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_CONTACT as string,
          form.current as HTMLFormElement,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY as string
        )
        .then(
          () => {
            setSuccess({
              title: 'Success',
              description:
                'The message was sent. Thank you, we will reply to you as soon as possible',
            });
            resetForm();
          },
          () =>
            setError({
              title: 'Error',
              description: 'Service is unavailable. Please try to send a message later',
            })
        )
        .finally(() => setDisabled(false));
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      {variant === 'standard' && <TfHeadline variant="h3">Contact Us</TfHeadline>}
      {contactFields.map(({ label, name, placeholder, type }) => (
        <TextField
          key={name}
          autoComplete="off"
          fullWidth
          margin="dense"
          name={name}
          label={label}
          type={type}
          variant={variant}
          placeholder={placeholder}
          value={formik.values[name]}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.errors[name]}
          onChange={formik.handleChange}
        />
      ))}
      <Grid container justifyContent="flex-end">
        <Button
          type="submit"
          variant="contained"
          disabled={disabled}
          sx={{ marginTop: '30px', marginRight: '30px' }}
        >
          Send
        </Button>
      </Grid>
      {alertProps.severity && <AlertMessage {...alertProps} />}
    </form>
  );
};

export default ContactForm;
