import { Button, Card, Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RenderTextField from '../renderInput';
import RenderNumber from '../renderNumber';
import { schemaContact } from './schema';

const ContactForm = (props) => {
  const { onSubmit, onReturn, isEdit, data } = props;
  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schemaContact),
    defaultValues: isEdit ? data : {},
  });

  const inputFields = [
    { name: 'firstName', error: Boolean(errors?.firstName), label: 'First name', default: '', message: errors?.firstName?.message },
    { name: 'lastName', error: Boolean(errors?.lastName), label: 'Last name', default: '', message: errors?.lastName?.message },
    { name: 'email', error: Boolean(errors?.email), label: 'Email', default: '', message: errors?.email?.message },
  ]
  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ padding: '3rem' }}>
        <Typography variant="h5" sx={{ paddingY: '2rem', fontWeight: 'bold' }}>
          {isEdit ? 'Edit Contact' : 'Create Contact'}
        </Typography>
        {
          inputFields?.map((item) => (
            <Grid item xs={3} sx={{ width: '250px', paddingY: '1rem' }} key={`${item.name}-field`}>
              <Controller
                defaultValue={item.default}
                name={item.name}
                control={control}
                rules={{ required: true }}
                render={
                  ({ field }) => (
                    <RenderTextField
                      label={item.label}
                      field={field}
                      error={item.error}
                      variant="standard"
                      helperText={item.message} />
                  )
                } />
            </Grid>
          ))
        }
        <Grid item xs={3} sx={{ width: '250px', paddingY: '1rem' }}>
          <Controller
            defaultValue=""
            name="phone"
            control={control}
            rules={{ required: true }}
            render={
              ({ field }) => (
                <RenderNumber
                  label="Phone"
                  field={field}
                  error={Boolean(errors?.phone)}
                  variant="standard"
                  helperText={errors?.phone?.message} />
              )
            } />
        </Grid>
        <Grid item xs={3} sx={{ width: '250px', paddingY: '1rem' }}>
          <Button type="submit" fullWidth variant="contained">
            {`${isEdit ? 'Edit' : 'Create'} Contact`}
          </Button>
        </Grid>
        <Grid item xs={3} sx={{ width: '250px', paddingY: '0.5rem' }}>
          <Button onClick={onReturn} type="button" fullWidth variant="contained" color="secondary">Return to list of users</Button>
        </Grid>
      </Grid>
    </form>
  )
}
ContactForm.defaultProps = {
  onSubmit: () => { },
  onReturn: () => { },
  isEdit: false,
  data: {}
}
export default ContactForm;
