import Card01 from "../../components/Card/Card01";
import Card02 from "../../components/Card/Card02";
import Card03 from "../../components/Card/Card03";
import Card04 from "../../components/Card/Card04";
import Card05 from "../../components/Card/Card05";
import Navbar from "../../components/Layout/Navbar";
import { BANK_TRANSFER, COD, COIN, CREDIT_CARD, DUMMY01, DUMMY02, DUMMY03, DUMMY04, DUMMY05, DUMMY06, DUMMY07 } from '../../components/Utilities/Sources';

const CardDemo = () => {
    return ( 
        <div>
            <Navbar/>
            <div className="bg-blueGray-50 h-screen p-10">


                <div className='text-xl font-semibold my-10'>Card 01</div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 sm:gap-10 mx-5 sm:mx-0'>
                    <Card01 src={DUMMY05} text="Propose"/>
                    <Card01 src={DUMMY06} text="Happy"/>
                    <Card01 src={DUMMY07} text="Sad"/>
                </div>

                <div className='text-xl font-semibold my-10'>Card 02</div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 mx-5 sm:mx-0'>
                    <Card02 src={DUMMY02} title="Genie Infotech" stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"/>
                    <Card02 src={DUMMY01} title="Genie Infotech" stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"/>
                    <Card02 src={DUMMY04} title="Genie Infotech" stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"/>
                </div>

                <div className='text-xl font-semibold my-10'>Card 03</div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-10 mx-5 sm:mx-0'>
                    <Card03 src={DUMMY03} title="Genie Infotech" color='#F9E8EA' stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor elit, iusmod tempor incid sed do eiusmod tempor incididunt ut labore"/>
                    <Card03 src={DUMMY02} title="Genie Infotech" color='#D9F1F0' stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor elit, iusmod tempor incid sed do eiusmod tempor incididunt ut labore"/>
                    <Card03 src={DUMMY04} title="Genie Infotech" color='#FEF2D9' stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor elit, iusmod tempor incid sed do eiusmod tempor incididunt ut labore"/>
                    <Card03 src={DUMMY05} title="Genie Infotech" color='#F9E8EA' stars={5} text="Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor elit, iusmod tempor incid sed do eiusmod tempor incididunt ut labore"/>
                </div>

                <div className='text-xl font-semibold my-10'>Card 04</div>

                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-10 mx-3 sm:mx-0'>
                    <Card04 src={DUMMY04} title="Genie Infotech" stars={5} text="Price $820"/>
                    <Card04 src={DUMMY06} title="Genie Infotech" stars={5} text="Price $820"/>
                    <Card04 src={DUMMY03} title="Genie Infotech" stars={5} text="Price $820"/>
                    <Card04 src={DUMMY07} title="Genie Infotech" stars={5} text="Price $820"/>
                </div>

                <div className='text-xl font-semibold my-10'>Card 05</div>

                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12  gap-5 sm:gap-10'>
                    <Card05 src={CREDIT_CARD} title="Credit Card"/>
                    <Card05 src={BANK_TRANSFER} title="Bank Transfer"/>
                    <Card05 src={COD} title="COD"/>
                    <Card05 src={COIN} title="Coin"/>
                    <Card05 src={CREDIT_CARD} title="Credit Card"/>
                    <Card05 src={BANK_TRANSFER} title="Bank Transfer"/>
                    <Card05 src={COD} title="COD"/>
                    <Card05 src={COIN} title="Coin"/>
                    <Card05 src={CREDIT_CARD} title="Credit Card"/>
                    <Card05 src={BANK_TRANSFER} title="Bank Transfer"/>
                    <Card05 src={COD} title="COD"/>
                    <Card05 src={COIN} title="Coin"/>
                </div>

            </div>
        </div>
     );
}
 
export default CardDemo;