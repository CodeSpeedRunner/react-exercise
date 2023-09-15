
function SearchBar({setSearch, search, setUser, data, ...props }) {

  
  return (
    <div className={box}>

        <input className={input} {...props } value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {data && search!=='' && <div className={submenu}>
            {data.map(item=>(
                <div className={subMenuItem} onClick={()=>{
                        setUser(item.login)
                        setSearch('')
                    }}>
                    {item.login}
                </div>
            ))}
        </div>}
    </div>
  );
}

export default SearchBar;

const box = 'flex items-center justify-center py-4 w-[100%] bg-gray-800 fixed top-0'
const submenu = ' fixed top-[62px] w-[100%] rounded bg-white shadow p-2  bottom-100'
const subMenuItem = 'cursor-pointer hover:opacity-50'
const input = 'outline-none px-4 py-2 rounded'