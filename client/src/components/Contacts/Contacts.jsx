import { BiSearch, BiDotsHorizontalRounded } from 'react-icons/bi'
import Contact from './Contact'
const Contacts = () => {
  return (
    <div className='w-full mt-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold text-gray-300'>Contacts</h1>
        <div className='flex items-center space-x-2'>
          <BiSearch size={20} />
          <BiDotsHorizontalRounded size={20} />
        </div>
      </div>
      {contacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </div>
  )
}
const contacts = [
  {
    image:
      'https://th.bing.com/th/id/OIP.ManH_K9mK6w9YTzb_I3fQAHaJ8?pid=ImgDet&rs=1',
    username: 'Robert Downye Jr',
  },
  {
    image:
      'https://th.bing.com/th/id/OIP.R6g_5Iq5uNtt9Fu8KSTzSwHaHa?pid=ImgDet&rs=1',
    username: 'Tom Cruise',
  },
  {
    image:
      'https://celebmafia.com/wp-content/uploads/2018/04/monica-barbaro-2018-women-in-the-world-summit-in-new-york-2.jpg',
    username: 'Monica Barbora',
  },
  {
    image:
      'https://cdn.glamcheck.com/fashion/files/2012/03/miranda-kerr-bikini-New-VS-Swimwear-Collection.jpg',
    username: 'Miranda Kerr',
  },
  {
    image:
      'https://th.bing.com/th/id/OIP.sMyap3eIiqVb_jJVb-Gv7gHaJO?pid=ImgDet&rs=1',
    username: 'Jenifer Aniston',
  },
  {
    image:
      'https://th.bing.com/th/id/OIP.UBnjCPNF5KbbvXT7v9Y0igAAAA?pid=ImgDet&rs=1',
    username: 'Samatha Ruth Purba',
  },
  {
    image:
      'https://th.bing.com/th/id/OIP.RoQjp0hpY5L1nPJO56xYuQHaGL?pid=ImgDet&rs=1',
    username: 'Cristiano Ronaldo',
  },
  {
    image:
      'https://th.bing.com/th/id/OIP.Nmv8DJNcDdc8zY4l5bk99wHaI-?pid=ImgDet&rs=1',
    username: 'Shahrukh Khan',
  },
  {
    image:
      'https://4.bp.blogspot.com/-jWMZxGa3UF4/VmxKsQYfN8I/AAAAAAAABlg/ExcBx7UBkuY/s1600/tollywood-celebrities.jpg',
    username: 'Kajol agarwal',
  },
]
export default Contacts
