import React, { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { login } from '../api/authApi'
import { queryKeys } from '../constants/queryKeys'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const userLogin = useMutation((credential) => login(credential))

  const [values, setValues] = useState({
    username: '',
    password: '',
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const signin = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('username', values.username)
    formData.append('password', values.password)
    try {
      userLogin.mutate(formData, { onSuccess: () => navigate('/') })
      // queryClient.setQueryData(queryKeys.user, data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form
        className='w-[600px] min-h-[300px] h-auto  rounded-lg bg-orange-300 py-4 px-8'
        onSubmit={signin}
      >
        <h1 className='text-4xl font-bold text-center'>Login Form</h1>
        <div className='flex flex-col space-y-4 mt-10'>
          <input
            type='text'
            placeholder='username'
            name='username'
            value={values.username}
            onChange={handleChange}
            className='w-full leading-10 rounded-lg px-4 border-2 outline-none focus:border-sky-500'
          />
          <input
            type='password'
            placeholder='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            className='w-full leading-10 rounded-lg px-4 border-2 outline-none focus:border-sky-500'
          />
          <button
            type='submit'
            className='text-center bg-emerald-600 hover:bg-emerald-500 w-full font-semibold text-white text-xl leading-10 rounded-lg'
          >
            SignIn
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
