import { CircularProgress, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import ContactForm from '../../components/contactForm';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { createContactsAPI } from '../../services/contacts';
import { getContact } from '../../store/slices/contact/thunks';
import { editContactAPI } from '../../services/contacts/index';
import { buildSnackVariant } from '../../utility/functions';

const CreateContact = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const id = router?.query?.id;
  const { isLoading, contact } = useAppSelector(state => state?.contact);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (id != undefined) {
      dispatch(getContact(id));
    }
  }, [dispatch, id]);
  const onSubmit = data => {
    editContactAPI(data, id).then(async () => {
      await enqueueSnackbar('The contact has been edited.', buildSnackVariant('success'));
      await router.push('/contacts');
    }).catch((err) => {
      const {
        response: {
          data,
        },
      } = err;
      enqueueSnackbar(data ? data?.message : 'An error has ocurred', buildSnackVariant('error'));
    })
  };
  return (
    <>
      {
        isLoading ? (
          <>
            <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ paddingTop: '3rem' }}>
              <CircularProgress color="primary" size={200} />
            </Grid>
          </>
        ) : (
          <ContactForm onSubmit={onSubmit} onReturn={() => router.push('/contacts')} isEdit data={contact} />
        )
      }
    </>
  )
}

export default CreateContact;