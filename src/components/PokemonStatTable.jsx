import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export const PokemonStatTable = ({ stats }) => {
  return (
    <Paper elevation={4}>
      <TableContainer>
        <Table stickyHeader aria-label='stats table'>
          <TableHead>
            <TableRow>
              <TableCell>Stat</TableCell>
              <TableCell align='right'>Value</TableCell>
              <TableCell align='right'>Effort</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map(({ base_stat, effort, stat: { name } }) => (
              <TableRow
                key={name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </TableCell>
                <TableCell align='right'>{base_stat}</TableCell>
                <TableCell align='right'>{effort}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
