import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Paggination({page, setPage, pages}) {

  return (
        <div className={box}>
            <Stack spacing={2}>
            <Pagination 
                count={pages} 
                page={page}
                shape="rounded" 
                onChange={(event,newPage)=> setPage(newPage)}
            />
            </Stack>
        </div>
    )
}

export default Paggination;

const box = ' flex bg-gray-100 w-screen py-2 shadow-xl items-center justify-center fixed bottom-0 '

