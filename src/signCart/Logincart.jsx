
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom';

export default function Logincart(){
  const navigate=useNavigate();

    return(

     
        <div style={{display:'flex',justifyContent:'center'}}>
        <img src="/images/logingif.gif" alt="" />
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" style={{height:'2rem'}} onClick={()=>navigate('/Login')}>Login to view cart</Button>
       
      
      </Stack>
        </div>
    )
}