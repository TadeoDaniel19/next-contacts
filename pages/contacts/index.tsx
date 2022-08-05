import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Button, CircularProgress, Grid } from '@mui/material';
import MultipleActions from '../../components/table';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { getContacts } from '../../store/slices/contacts/thunks';
import { buildData } from '../../utility/functions';
import { columns } from '../../components/table/constants';
import { GroupAddOutlined, Delete, Edit } from '@mui/icons-material';

const Contacts: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, results, pagination } = useAppSelector(state => state?.contacts);
  const actions = [
    {
      icon: Edit,
      tooltip: 'Edit contact',
      iconProps: { fontSize: "small", color: "primary" },
      onClick: (e: any, row: any) => router.push(`/editContact/${row?.id}`),
    },
    {
      icon: Delete,
      tooltip: 'Delete contact',
      onClick: (e: any, row: any) => router.push(`/deleteContact/${row?.id}`),
    }
  ]
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

  const changePage = (e: number) => {
    dispatch(getContacts(e + 1));
  };

  return (
    <>
      {
        isLoading ? (
          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ paddingTop: '3rem' }}>
            <CircularProgress color="primary" size={200} />
          </Grid>
        ) : (
          <Grid
            container
            sx={{ padding: '2rem' }}
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid container direction="row" justifyContent="end" alignItems="center" sx={{ paddingRight: '1rem' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<GroupAddOutlined />}
                onClick={() => router.push('/createContact')}>
                Add Contact
              </Button>
            </Grid>
            <Grid container>
              <MultipleActions
                title="Contacts"
                columns={columns}
                data={buildData(results)}
                actions={actions}
                pagination={pagination}
                changePage={changePage}
              />
            </Grid>
          </Grid>
        )
      }
    </>
  )
}

export default Contacts;
