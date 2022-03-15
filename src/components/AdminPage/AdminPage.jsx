import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function AdminPage() {
    const dispatch = useDispatch();

    const enterpriseInfo = useSelector(store => store.adminReducer);
    console.log(enterpriseInfo)

    useEffect(()=> {
        dispatch({ type: 'GET_ADMIN_TABLE' })
    }, []);

    const handleClick = (enterpriseId) => {
        
        dispatch({
            type: 'GET_ENTERPRISE_DETAILS',
            payload: enterpriseId
        })
    }

    return(
        <div className="adminView">
            <h1>Admin View</h1>
            <table className='adminTable'>
                <thead>
                    <tr>
                        <th>Enterprise Name</th>
                        <th>Enterprise Logo</th>
                    </tr>
                </thead>
                <tbody>
                        {enterpriseInfo && enterpriseInfo?.map(enterprise => (
                        <tr key={enterprise.id}>
                            <td>{enterprise.enterpriseName}</td>
                            <td><img src={enterprise.logoUrl} height={100}/></td>
                            <td 
                                className="tableClick" 
                                onClick={() => handleClick(enterprise.id)}
                            >
                                View Enterprise Report
                            </td>
                        </tr>
                        ))}

                </tbody>
            </table>
            
        </div>
    )
}

export default AdminPage;