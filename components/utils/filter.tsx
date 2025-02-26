import { Filter } from 'lucide-react'

const FilterDogs = ({
  filterPresent,
  setFilterPresent,
}: {
  filterPresent: boolean | null
  setFilterPresent: (value: boolean | null) => void
}) => {
  return (
    <div className='bg-primary flex items-center rounded-md px-1 text-xs text-white'>
      <Filter className='h-[1.5em] p-1 text-white' />
      <select
        className=''
        value={
          filterPresent === null
            ? 'all'
            : filterPresent
              ? 'present'
              : 'not-present'
        }
        onChange={(e) => {
          const value = e.target.value
          setFilterPresent(value === 'all' ? null : value === 'present')
        }}
      >
        <option value='all'>All</option>
        <option value='present'>Present</option>
        <option value='not-present'>Not Present</option>
      </select>
    </div>
  )
}

export default FilterDogs
