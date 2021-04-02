import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-bootstrap'
import Layout from '../compoenets/layout'

const Register = () => {

  const { register, handleSubmit } = useForm();

    return (
      <Layout>
        <div className="flex flex-col h-full w-full justify-content space-x-4 m-10 p-10  ">

        <form onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));

        })}>
        <div>
          <label className="text-l mt-4 font-bold text-logodark block text-right">البريد الإلكتروني</label>
          <input 
            ref={register}
            type="text" 
            className="w-full p-2 mt-4 border border-gray-300 rounded mt-1"
            name="email"
          ></input>
          </div>

          <div>
          <label className="text-l mt-4 font-bold text-logodark block text-right">كلمة المرور</label>
          <input 
            ref={register}
            type="password" 
            className="w-full p-2 mt-4 border border-gray-300 rounded mt-1"
            name="password"
          ></input>
          </div>

          <div>
          <label className="text-l mt-4 font-bold text-logodark block text-right">إعادة كلمة المرور</label>
          <input             
            ref={register}
            type="password" 
            className="w-full p-2 mt-4 border border-gray-300 rounded mt-1"
            name="repassword"
          ></input>
          </div> 

          <div>
            <button type="Submit" className="text-l font-bold text-white mt-4 text-center button w-full py-2 px-4 bg-logodark hover:bg-black rounded-xl">تسجيل</button>

          </div>
        </form>
        </div>
      </Layout>
    )
  }
export default Register