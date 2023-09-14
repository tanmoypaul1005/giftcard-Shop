import Card04 from "../../../components/Card/Card04";
import Toolbar from "../../../components/Toolbar/Toolbar";
import { DUMMY01, DUMMY02, DUMMY03, DUMMY04, DUMMY06 } from "../../../components/Utilities/Sources";

const ChooseAnother = () => {
    return ( 
        <div className='custom-container'>

            <div className='text-center mb-5 mt-10'>
                <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-5'>{t('Choose Another One')}</div>
                
            </div>

            <Toolbar/>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-10 mx-3 sm:mx-0'>
                <Card04 src={DUMMY04} title="Genie Infotech" stars={5} text="Price $820"/>
                <Card04 src={DUMMY06} title="Genie Infotech" stars={5} text="Price $820"/>
                <Card04 src={DUMMY03} title="Genie Infotech" stars={5} text="Price $820"/>
                <Card04 src={DUMMY02} title="Genie Infotech" stars={5} text="Price $820"/>
                <Card04 src={DUMMY01} title="Genie Infotech" stars={5} text="Price $820"/>
                <Card04 src={DUMMY03} title="Genie Infotech" stars={5} text="Price $820"/>
            </div>

        </div>
     );
}
 
export default ChooseAnother;