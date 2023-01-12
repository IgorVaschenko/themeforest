import { useRef, useState } from 'react';

import { subscribeEmailSchema as validationSchema } from 'constants/validation';

import emailjs from '@emailjs/browser';

import { Button, Grid } from '@mui/material';

import { useFormik } from 'formik';
import { useAlertMessage } from 'hooks';

import useMatch from 'hooks/useMatch';
import { themeParams } from 'theme';
import { TfButton } from 'themeforest-design-system-react';

import AlertMessage from 'components/AlertMessage';

import { Input, SubscribeContainer } from './styled';

const SubscribeForm = () => {
  const [alertProps, setSuccess, setError] = useAlertMessage(5000);
  const [disabled, setDisabled] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const isMatch = useMatch();

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setDisabled(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID as string,
          process.env.REACT_APP_EMAIL_TEMPLATE_SUBSCRIBE as string,
          form.current as HTMLFormElement,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY as string
        )
        .then(
          () => {
            setSuccess({
              title: 'Success',
              description: "You've been successfully subscribed",
            });
            resetForm();
          },
          () => {
            setError({
              title: 'Error',
              description: 'Service is unavailable. Please try to subscribe later',
            });
          }
        )
        .finally(() => setDisabled(false));
    },
  });
  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      {isMatch ? (
        <Grid container direction="column" justifyContent="center">
          <Grid item ml={2} mr={2}>
            <Input
              name="email"
              placeholder="Your email"
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.values.email)}
              onChange={formik.handleChange}
              sx={{
                width: '100%',
                color: 'white',
                border: '1px solid white',
                borderRadius: '6px',
                margin: '10px auto',
                padding: '5px',
              }}
            />
          </Grid>
          <Grid item>
            <TfButton
              onClick={formik.submitForm}
              variant="outlined"
              shadow
              text="Subscribe"
              size="md"
              width={isMatch ? '100%' : ''}
              color={themeParams.colors.secondary}
              style={{ background: `${themeParams.colors.white}` }}
            />
          </Grid>
        </Grid>
      ) : (
        <SubscribeContainer>
          <Input
            name="email"
            placeholder="Your email"
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.values.email)}
            onChange={formik.handleChange}
          />
          <Button
            color="secondary"
            variant="text"
            type="submit"
            disabled={disabled}
            onClick={formik.submitForm}
          >
            Send
          </Button>
        </SubscribeContainer>
      )}
      {alertProps.severity && <AlertMessage {...alertProps} />}
    </form>
  );
};

export default SubscribeForm;
