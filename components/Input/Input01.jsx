const Input01 = ({
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
    maxLength = null,
    autoFocus = false
}) => {



    return (
        <div className={`${className !== "" ? className : 'mb-5'}`}>

            {!no_label && <div className="text-gray-600 mb-2">{label}</div>}

            <div className={`${className2} ${icon && 'relative flex justify-center items-center'}`}>
                {!textarea && <input required={required} onClick={onClick} onChange={onChange} type={type} name={name} value={value && value} className={`bg-cWhite border px-5 py-3 w-full outline-none rounded-md ${className3} focus:shadow-c6 focus:outline-none focus:border-cBrand `} placeholder={placeholder} readOnly={is_readonly} minLength={minLength} autoFocus={autoFocus} maxLength={maxLength}/>}
                {textarea &&

                    <textarea name={name} required={required} onChange={onChange} value={value} className={`h-full w-full resize-none rounded-md outline-none px-5 py-3 border ${className3} focus:shadow-c6 focus:outline-none focus:border-cBrand`} rows={rows} cols={cols} placeholder={placeholder} minLength={minLength} maxLength={maxLength} autoFocus={autoFocus} />}

                {icon && <div className={`absolute right-1 px-2 ${pipe && 'border-l'} border-gray-300 text-gray-600 ${className4}`}>{icon}</div>}
            </div>

        </div>
    );
}

export default Input01;