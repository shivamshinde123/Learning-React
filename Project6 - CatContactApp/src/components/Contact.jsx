import phone_icon from '../assets/phone-icon.png'
import mail_icon from '../assets/mail-icon.png'

export default function Contact(props) {
    
    return (
        <div className='flex flex-col items-start border border-gray-300 w-full md:w-1/2 lg:w-1/3 p-2 m-7 shadow-xl rounded-md bg-white'>
            <img src={props.img} alt="cat-image" className='w-full rounded-md object-cover' />
            <h2 className='font-bold text-2xl mb-2.5 break-words'>{props.name}</h2>
            <div className='flex gap-2 items-center mb-1.5 w-full'>
                <img src={phone_icon} alt="phone-icon" className='w-5' />
                <p className='break-words'>{props.phone_number}</p>
            </div>
            <div className='flex gap-2 items-center mb-1.5 w-full'>
                <img src={mail_icon} alt="mail-icon" className='w-6' />
                <p className='break-words'>{props.email}</p>
            </div>
        </div>
    )
}

