import RepositoryDetails from '../RepositoryDetail/RepositoryDetail';

function RepositoryList({repositories}) {


  return (
    <div className={box}>
        {repositories && repositories.map(item => (
                <RepositoryDetails item={item} />
            ))
        }
    </div>
  );
}

export default RepositoryList;

const box = 'pt-[45px]'



