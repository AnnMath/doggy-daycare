const ToggleSwitch = ({ checked }: { checked: boolean }) => {
  return (
    <>
      <label className='flex cursor-pointer items-center select-none'>
        <div className='relative'>
          <input
            type='checkbox'
            readOnly
            checked={checked}
            className='sr-only'
          />
          <div
            className={`h-8 w-14 rounded-full border-1 border-gray-300 ${
              checked ? 'bg-success-light' : 'bg-danger-light'
            }`}
          ></div>
          <div
            className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full transition ${
              checked ? 'bg-success translate-x-full' : 'bg-danger'
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default ToggleSwitch
