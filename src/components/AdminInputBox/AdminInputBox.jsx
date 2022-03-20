import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from "@mui/material/TextField";


function AdminInputPage ({value, callback}) {
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    return (
        <div className="adminInputBox">
            <h3>Input from Basil Data</h3>
            {user.authLevel === 'guest' ?
            <p className='guestFeedback'>{value}</p>
            :
            <TextField
                id="outlined-basic"
                label="Basil Data Input"
                variant="outlined"
                InputLabelProps={{shrink: true,}}
                value={value}
                multiline
                rows={5}
                fullWidth
                onChange={(event) => callback(event.target.value)}
                disabled={user.authLevel==='guest'}
            ></TextField>
            }
        </div>
    )

};

export default AdminInputPage;