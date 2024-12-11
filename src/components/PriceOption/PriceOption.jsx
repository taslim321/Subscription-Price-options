import PropTypes from 'prop-types'; // ES6
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {plan_name,price_per_month,price_per_year,features} = option
    return (
        <div className='bg-red-400 p-10 rounded-xl flex flex-col '>
            <h3>
                <span className='text-7xl'>{price_per_month}</span>
                <span className='text-2xl'>/Month</span>
            </h3>
            <h4 className='text-5xl my-8'>{plan_name}</h4>
            <div className='flex-grow'>
            {
                features.map((feature,idx) => <Feature key ={idx} feature={feature}></Feature>  )
            }
            </div>
            <button className='mt-12 bg-cyan-700 w-full text-white text-2xl p-4 rounded-lg font-bold hover:bg-green-400'>Buy Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object.isRequired
}
export default PriceOption;