import {IoBarChartSharp} from 'react-icons/io5';
import { MdMenuBook} from 'react-icons/md';
import { FaSwatchbook, FaUsers, FaUserEdit } from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import { PiNotebookFill, PiBrowsersFill} from "react-icons/pi"

const links = [
{
    id:1,
    text: 'stats',
    path:'/',
    icon: <IoBarChartSharp />,
},
{
    id:2,
    text: 'all books',
    path:'all-books',
    icon: <MdMenuBook />,
},
{
    id:3,
    text: 'add book',
    path:'add-book',
    icon: <PiNotebookFill />,
},
{
    id:4,
    text: 'all issues',
    path:'all-issues',
    icon: <PiBrowsersFill />,
},
{
    id:5,
    text: 'add issue',
    path:'add-issue',
    icon: <FaSwatchbook />,
},
{
    id:6,
    text: 'all users',
    path:'all-users',
    icon: <FaUsers />,
},
{
    id:7,
    text: 'add user',
    path:'add-user',
    icon: <FaUserEdit />,
},
{
    id:8,
    text: 'profile',
    path:'profile',
    icon: <ImProfile />,
},
];

export default links;