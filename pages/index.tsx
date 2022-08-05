import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/contacts')
  }, [router])

  return (
    <Grid container direction="row" justifyContent="center" sx={{ padding: '1rem' }}>
      <h1>Welcome.....</h1>
    </Grid>
  )
}

export default Home
