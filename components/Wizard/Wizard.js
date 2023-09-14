import WizardItem from "./WizardItem";
import { BsCheckAll, BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { IoIosWarning } from 'react-icons/io'
import { TiCancel } from 'react-icons/ti'
import { VscBellDot } from 'react-icons/vsc'

const Wizard = () => {
    
    return ( 
        <div className='flex items-center justify-between max-w-3xl w-full overflow-x-scroll overflow-y-none mx-auto'>
            
            <WizardItem hide_line text="Write Message" color="bg-green-300" icon={<VscBellDot className="font-extrabold text-lg"/>} />

            <WizardItem text="Write Message" color="bg-green-300" icon={<BsFillFileEarmarkArrowDownFill className="font-extrabold text-lg"/>} />

            <WizardItem text="Write Message" color="bg-green-300" icon={<TiCancel className="font-extrabold text-lg"/>} />

            <WizardItem text="Write Message" color="bg-gray-300" icon={<IoIosWarning className="font-extrabold text-lg"/>} />

        </div>
     );
}
 
export default Wizard;