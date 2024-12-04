import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    return (
        <div>
            <li className="mr-4 hover:bg-slate-600" ><a href={route.path}>{route.name}</a></li>
        </div>
    );
};


Link.propTypes = {
    route: PropTypes.object.isRequired
}
export default Link;