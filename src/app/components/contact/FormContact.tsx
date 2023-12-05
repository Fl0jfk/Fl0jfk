'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

function FormContact () {
    const { register, handleSubmit } = useForm<FormData>();
    function onSubmit(data: FormData) {
        sendEmail(data);
    }
    return (
        <section className="flex items-center w-[50%] justify-center sm:w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                    <label htmlFor='name' className='mb-3 block text-base font-medium'>
                        Votre nom et prénom
                    </label>
                    <input
                    type='text'
                    placeholder='Nom et prénom'
                    className='w-full rounded-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md text-black'
                    {...register('name', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='email' className='mb-3 block text-base font-medium'>
                        Votre adresse mail
                    </label>
                    <input
                    type='email'
                    placeholder='exemple@domaine.fr'
                    className='w-full rounded-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md text-black'
                    {...register('email', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='message' className='mb-3 block text-base font-medium'>
                    Message
                    </label>
                    <textarea
                    rows={4}
                    placeholder='Écrivez votre message ici ...'
                    className='w-full resize-none rounded-xl border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md text-black'
                    {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div>
                    <button className='hover:shadow-form rounded-full border-[1px] border-[#ffffff8f] font-thin py-3 px-8 text-base uppercase  text-white outline-none transition duration-300 ease-in-out hover:bg-white hover:text-black'>
                        Envoyer
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FormContact;