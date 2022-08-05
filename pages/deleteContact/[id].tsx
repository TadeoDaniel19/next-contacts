import { Grid } from '@mui/material';
import DeleteCard from '../../components/deleteForm';
import { useRouter } from 'next/router';
import { deleteOneContactAPI } from '../../services/contacts';
import { useSnackbar } from 'notistack';
import { buildSnackVariant } from '../../utility/functions';

const DeleteContact = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const id = router?.query?.id;
  const onReturn = () => router?.push('/contacts');
  const onSubmit = () => {
    deleteOneContactAPI(id).then(async () => {
      await enqueueSnackbar('The contact has been deleted', buildSnackVariant('success'));
      await router.push('/contacts');
    }).catch((err) => {
      const {
        response: {
          data,
        },
      } = err;
      enqueueSnackbar(data ? data?.message : 'An error has ocurred', buildSnackVariant('error'));
    })
  }
  return (
    <Grid container direction="column" item xs={12} justifyContent="center" alignItems="center" spacing={0} sx={{ padding: '2rem'}}>
      <DeleteCard onReturn={onReturn} onSubmit={onSubmit}/>
    </Grid>
  )
}
export default DeleteContact;