import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const DeleteCard = (props) => {
  const { onReturn, onSubmit } = props;
  return (
    <Grid item xs={6}>
      <Card sx={{ padding: '1rem' }}>
        <CardContent>
          <Typography sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom align="center">
            Delete Contact
          </Typography>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <WarningAmberIcon color="warning" sx={{ width: 60, height: 60 }}/>
          </Grid>
          <Typography variant="h6" component="div" align="center">
            Are you sure to delete the following record?
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button onClick={onReturn} variant="contained" color="secondary">Cancel</Button>
          <Button onClick={onSubmit} variant="contained">Confirm</Button>
        </CardActions>
      </Card>
    </Grid>
  )
};

DeleteCard.defaultProps = {
  onReturn: () => {},
  onSubmit: () => {},
};

export default DeleteCard;