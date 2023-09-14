import React from 'react'

export default function CommonButton({ onClick, label, type='button' }) {
  return (
    <>
      <button onSubmit={onClick} onClick={() => onClick} type={type} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
        {label}
      </button>
    </>
  )
}
