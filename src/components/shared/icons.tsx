import accounts from '../../assets/images/accounts.svg';
import company from '../../assets/images/company.svg';
import dashboard from '../../assets/images/dashboard.svg';
import drivers from '../../assets/images/drivers.svg';
import devices from '../../assets/images/devices.svg';
import orders from '../../assets/images/orders.svg';
import settings from '../../assets/images/settings.svg';
import upload  from '../../assets/images/upload.svg';
import accountsWhite from '../../assets/images/accountsWhite.svg';
import companyWhite from '../../assets/images/companyWhite.svg';
import dashboardWhite from '../../assets/images/dashboardWhite.svg';
import driversWhite from '../../assets/images/driversWhite.svg';
import devicesWhite from '../../assets/images/devicesWhite.svg';
import ordersWhite from '../../assets/images/ordersWhite.svg';
import settingsWhite from '../../assets/images/settingsWhite.svg';
import  docFile from '../../assets/images/docFile.svg';
import logout from '../../assets/images/logout.svg';
import van from '../../assets/images/van.svg';
import orderComplete from '../../assets/images/orderComplete.svg';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { BsThreeDotsVertical,BsFillCameraFill} from 'react-icons/bs'
import { BiSearch,BiArrowBack } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa'
import { AiOutlinePlus,AiOutlineStar,AiOutlineCheckCircle } from 'react-icons/ai'
import notification from '../../assets/images/notification.svg';
import threeBar from '../../assets/images/threeBar.svg';


const icons = {
    accounts,
    company,
    dashboard,
    drivers,
    devices,
    orders,
    settings,
    accountsWhite,
    companyWhite,
    dashboardWhite,
    driversWhite,
    devicesWhite,
    ordersWhite,
    settingsWhite,
    logout,
    orderComplete,
    van,
    arrowDown: <MdKeyboardArrowDown className='text-xl' />,
    notification,
    threeBar,
    grClose: IoClose,
    threeBarIcon: <BsThreeDotsVertical className='text-xl'/>,
    search:BiSearch,
    plus:AiOutlinePlus,
    filter:FaFilter,
    star:AiOutlineStar,
    camera:BsFillCameraFill,
    upload:upload,
    docFile:docFile,
    checkCircle:AiOutlineCheckCircle,
    closeCircle:IoIosCloseCircleOutline,
    arrowLeft:BiArrowBack
}

export default icons;