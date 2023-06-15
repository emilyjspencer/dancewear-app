import { useState} from 'react';
import TestUserDetailView from './TestUserDetailView'

const TestUserList = () => {
    const [data, setData]= useState('')
   
    const passDataFromListToDetail = () => {
        setData("passing data from list to detail component");
    }
    return(
        <>
    <TestUserDetailView listtodetail={data}/>

    <div>
        <button onClick={() => passDataFromListToDetail()}>Click UserList</button>
    </div>
    </>
    )
    }

export default TestUserList