import Bookmark from '../Bookmark/Bookmark'
import PropTypes from 'prop-types';

const Bookmarks = ({bookmark, readTime}) => {
    return (
        <div className='md:w-1/3 w-full'>
            <Bookmark bookmark={bookmark} readTime={readTime}></Bookmark>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmark : PropTypes.array,
    readTime: PropTypes.number
}


export default Bookmarks;