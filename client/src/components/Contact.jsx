import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [owner, setOwner] = useState(null);
  const [message, setMessage] = useState('');
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setOwner(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOwner();
  }, [listing.userRef]);
  return (
    <>
      {owner && (
        <div className='flex flex-col gap-2'>
          <p>
            Liên hệ <span className='font-semibold'>{owner.username}</span>{' '}
            về bất động sản: {' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Nhập lời nhắn...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <Link
          to={`mailto:${owner.email}?subject=Regarding ${listing.name}&body=${message}`}
          className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Gửis          
          </Link>
        </div>
      )}
    </>
  );
}