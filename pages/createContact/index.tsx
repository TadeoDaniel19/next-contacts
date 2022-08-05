import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import ContactForm from '../../components/contactForm';
import { createContactsAPI } from '../../services/contacts';
import { buildSnackVariant } from '../../utility/functions';

const CreateContact = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = data => {
    createContactsAPI(data).then(async () => {
      await enqueueSnackbar('The contact has been created', buildSnackVariant('success'));
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
    <ContactForm onSubmit={onSubmit} onReturn={() => router.push('/contacts')} />
  )
}

export default CreateContact;