'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

function FormContact () {
    const { register, handleSubmit, reset } = useForm<ContactFormData>();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<File>()
    const [emailSent, setEmailSent] = useState(false);
    async function onSubmit(data: ContactFormData) {
        try {
          setLoading(true);
          if(file){
            const dataFile = new FormData()
            dataFile.set('file', file)
            const res = await fetch('api/upload', {
                method: 'POST',
                body: dataFile
            })
            if(res.ok){setFile(undefined)}
          }
          await sendEmail(data);
          setEmailSent(true);
        } catch (error) {
          console.error('Erreur lors de l\'envoi de l\'email :', error);
        } finally {
          setLoading(false);
        }
      }  
        useEffect(() => {
            if (emailSent) {
              reset();
              setEmailSent(false);
            }
          }, [emailSent, reset]);
    return (
        <section className="flex items-center w-[50%] justify-center sm:w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                    <label htmlFor='name' className='mb-3 block text-base font-medium'>
                        Votre nom et prénom
                    </label>
                    <input
                        id='name'
                        autoComplete='true'
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
                        autoComplete='true'
                        id='email'
                        placeholder='exemple@domaine.fr'
                        className='w-full rounded-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md text-black'
                        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,  })}
                    />
                </div>
                <div className='mb-5' >
                    <label htmlFor='attachment' className='mb-3 block text-base font-medium'>
                        Pièces jointes
                    </label>
                    <input
                        onChange={(e) => setFile(e.target.files?.[0])}
                        accept='.pdf'
                        type='file'
                        id='attachment'
                        className='w-full border rounded-full border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md text-black' 
                    />
                        
                  
                </div>
                <div className='mb-5'>
                    <label htmlFor='message' className='mb-3 block text-base font-medium'>
                    Message
                    </label>
                    <textarea
                    id='message'
                    rows={4}
                    placeholder='Écrivez votre message ici ...'
                    className='w-full resize-none rounded-xl border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black-500 focus:shadow-md text-black'
                    {...register('message', { required: true })}
                    />
                </div>
                <div>
                    <button 
                        type='submit'
                        disabled={loading}
                        className='hover:shadow-form rounded-full border-[1px] border-[#ffffff8f] font-thin py-3 px-8 text-base uppercase  text-white outline-none transition duration-300 ease-in-out hover:bg-white hover:text-black'
                    >
                        {loading ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FormContact;