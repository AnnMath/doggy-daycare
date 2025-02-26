import { Search } from 'lucide-react'

const SearchDogs = ({
  search,
  setSearch,
}: {
  search: string
  setSearch: (value: string) => void
}) => {
  return (
    <div className='bg-primary flex items-center rounded-md text-white'>
      <Search className='h-[1.5em] p-1 text-white' />
      <p className='text-xs'>Search</p>
      <input
        type='text'
        placeholder='Name or breed'
        className='bg-primary w-30 rounded-md p-2 text-xs text-white'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchDogs
