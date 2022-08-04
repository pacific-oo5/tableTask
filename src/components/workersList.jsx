import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function WorkersList({workers}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell align="right">workdays</TableCell>
                        <TableCell align="right">wage</TableCell>
                        <TableCell align="right">salary</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {workers.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name} {row.lastname}
                            </TableCell>
                            <TableCell align="right">{row.workdays}</TableCell>
                            <TableCell align="right">{row.wage}</TableCell>
                            <TableCell align="right">{row.workdays*row.wage}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
