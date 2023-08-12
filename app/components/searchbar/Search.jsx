
import { SearchIcon } from './SearchIcon';

const Search = () => {
  return (
    <div className='flex justify-start items-center gap-[20px]'>
      <SearchIcon/>
      <input type="text" placeholder="Type to search..."  />
    </div>
  );
};
export default Search;
