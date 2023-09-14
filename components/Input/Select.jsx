const Select = (props) => {

  const {
    onClick = () => { },
    onChange,
    name,
    value,
    type = 'text',
    label,
    placeholder,
    className = "",
    className2 = "",
    className3 = "",
    className4 = "",
    is_readonly = false,
    no_label = false,
    icon = null,
    pipe = false,
    textarea = false,
    rows = 3,
    cols = 15,
    required = false,
    minLength = 0,
    options = [],
  } = props


  return (
    <div className={`${className !== "" ? className : 'mb-5'}`}>

      {!no_label && <div className="font-fw500 text-fs16 text-cTitleTextColor mb-2">{label}</div>}

      <div className={`${className2} ${icon && 'relative flex justify-center items-center'}`}>
        <select name={name} value={value} onChange={onChange} className={`bg-cWhite border px-5 py-3 w-full outline-none rounded-md ${className3} focus:shadow-c6 focus:outline-none focus:border-cBrand `}>
          {
            options.map((option, index) => <option className="font-fw500 text-fs16 text-cTitleTextColor" key={index} value={option.value}>{option.label}</option>)
          }
        </select>
      </div>

    </div>
  );
}

export default Select;