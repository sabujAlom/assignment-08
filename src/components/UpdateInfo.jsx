import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function UpdateInfo() {

  const close = () => {
    document.getElementById('modal').checked = false
  }

  const update = async (e) => {
    e.preventDefault()
    // e.target.reset()
    document.getElementById('modal').checked = false;
    const name = e.target.name.value.trim()
    const image = e.target.image.value.trim()
    await authClient.updateUser({

      name,
      ...(image && { image })
    })
    await authClient.getSession()
    e.target.reset()
    document.getElementById('modal').checked = false
  }
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="modal" className="btn button">Edit Info</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box  bg-[#1C1B1F] h-[45vh]">
          <form action="" onSubmit={update} className='max-w-xl w-full mx-auto'>
            <fieldset className="fieldset border-base-300 rounded-box border md:p-10 p-6  ">
              <h1 className='text-center text-3xl'>Update Your Info</h1>

              <label className="label">Name</label>
              <input type="text" className="input w-full bg-[#1C1B1F] border-[#b88e4866]" placeholder="Name" name='name' required />

              <label className="label">Iamge</label>
              <input type="url" className="input w-full bg-[#1C1B1F] border-[#b88e4866]" placeholder="Url" name='image' />

              <button className="btn btn-neutral mt-4 button" type='submit'>Update</button>
              {/* <p className='text-sm mt-3'>Don't have any account? <span className='text-blue-300'><Link href='/register'>Register</Link></span></p> */}
              <button className="btn btn-neutral mt-4 button" id='close' onClick={close}>Close</button>
              {/* <div className="divider">OR</div> */}
              {/* <button type='button' className='btn btn-neutral w-full border flex items-center'><FaGoogle />
                Log in with Google</button> */}
            </fieldset>


          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7" >Close</label>
      </div>
    </div>
  )
}
