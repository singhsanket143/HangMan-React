function TextInput({ label, type = 'text', value, onChange }) {

    return (

        <label className="flex justify-center text-[20px] w-[100%] text-green-600 font-extrabold mt-10">
            <div className="w-[40%]">
            {label && <span className="text-gray-700">{label}</span>}
                <input
                    className="px-4 py-2 border border-gray-500 rounded-md w-full"
                    onChange={onChange}
                    placeholder={label}
                    type={type}
                    value={value}
                />
            </div>

        </label>
    );

}
export default TextInput;