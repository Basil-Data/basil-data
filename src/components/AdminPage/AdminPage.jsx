import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI Table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function AdminPage() {

    //MUI table 
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#78e194',
            color: '#000000',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 18,
        },
    }));

    // Mui Button
    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#a18de1',
        '&:hover': {
            backgroundColor: '#bdb4d8',
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const dispatch = useDispatch();
    const history = useHistory();

    const enterpriseInfo = useSelector(store => store.adminReducer.adminTable);
    console.log(enterpriseInfo)

    useEffect(()=> {
        dispatch({ type: 'GET_ADMIN_TABLE' })
    }, []);

    const handleClick = (enterpriseId) => {
        
        dispatch({
            type: 'SET_SELECTED_ENTERPRISE',
            payload: enterpriseId
        })

        history.push('/story');
    }

    return(
        <div className="adminView">
            <h1>Admin View</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700}} aria-label="customized table" className='adminTable'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Enterprise Name</StyledTableCell>
                            <StyledTableCell align="center">Enterprise Logo</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {enterpriseInfo && enterpriseInfo?.map(enterprise => (
                            <StyledTableRow key={enterprise.id}>
                                <StyledTableCell component="th" scope="row">
                                    {enterprise.enterpriseName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <img src={enterprise.logoUrl} height={100}/>
                                </StyledTableCell>
                                <StyledTableCell 
                                    align="center"
                                >
                                    <ColorButton 
                                        variant="contained"
                                        onClick={() => handleClick(enterprise.id)}
                                    >
                                        View Enterprise Report
                                    </ColorButton>
                                </StyledTableCell>
                            </StyledTableRow>
                            ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdminPage;