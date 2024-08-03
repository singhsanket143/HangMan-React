function TextInput({ label, type = 'text', value, onChange }) {

    return (

        <label className="block">
            {label && <span className="text-white my-2">{label}</span>}
            <input
                className="rounded-md p-2 w-full"
                onChange={onChange}
                placeholder={label}
                type={type}
                value={value}
            />

        </label>
    );

}
export default TextInput;