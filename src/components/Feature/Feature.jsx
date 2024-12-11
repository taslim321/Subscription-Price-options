import PropTypes from 'prop-types'; // ES6
import { TbPointFilled } from "react-icons/tb";
const Feature = ({feature}) => {
    return (
        <div className='text-left'>
            <p className='flex items-center'><TbPointFilled className='mr-2'></TbPointFilled>{feature}</p>
        </div>
    );
};
Feature.PropTypes = {
    feature: PropTypes.string
}
export default Feature;