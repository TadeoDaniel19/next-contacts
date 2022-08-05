import { FC } from 'react';
import MaterialTable from 'material-table';
import { TableProps } from './interfaces';
import { tableIcons } from './icons';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../styles/theme/theme';
const MultipleActions: FC<TableProps> = (props: TableProps) => {
  const { columns, title, data, actions, changePage, pagination } = props;
  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        icons={tableIcons}
        components={{
          Container: props => <Grid {...props} />,
        }}
        title={<Typography variant="h4" gutterBottom>{title}</Typography>}
        onChangePage={changePage}
        columns={columns}
        data={data}
        style={{ width: '100%', padding: '1rem' }}
        actions={actions}
        totalCount={pagination?.totalCount}
        page={pagination?.page - 1}
        options={{
          initialPage: 0,
          actionsColumnIndex: 4,
          pageSize: 10,
          pageSizeOptions: [10],
          paginationType: 'stepped',
          draggable: false,
          search: false,
          headerStyle: { backgroundColor: '#E26376', color: "#FFF" },
          actionsCellStyle: {
            backgroundColor: "#FFF",
            color: "#E26376"
          },
        }}
      />
    </ThemeProvider>
  )
}

export default MultipleActions;