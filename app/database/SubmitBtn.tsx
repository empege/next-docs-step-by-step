"use client"

import { useFormStatus } from "react-dom"

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button
      className='button active hover:scale-110 disabled:bg-slate-900'
      type='submit'
      disabled={pending}
    >
      {!pending
        ? "Dodaj, da i tebe vide! :D"
        : "Submituje se... Cekaj malo pls"}
    </button>
  )
}

export default SubmitBtn
