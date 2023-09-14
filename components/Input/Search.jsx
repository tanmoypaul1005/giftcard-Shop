import { BsSearch } from 'react-icons/bs'

const Search = ({ isRightIcon = false, className = '', className2 = "bg-gray-100", search = () => { }, value = '', name = 'search' }) => {
    return (
        <div className={`relative text-gray-600 ${className}`}>
            <span className={`absolute ${isRightIcon ? 'right-3' : 'left-3'} w-8 flex item-center z-10 h-full leading-snug font-normal text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center py-3`}>
                <BsSearch className="text-gray-500" />
            </span>

            <input onChange={search} className={`w-full h-10 px-5 ${isRightIcon ? 'pr-12' : 'pl-12'} rounded-md text-sm focus:outline-none ${className2}`} type="search" name={name} value={value} placeholder="Search" />
        </div>
    );
}

export default Search;