function getButtonStyling(styleType) {
    const primaryButtonStyling = "border border-[#7c7c00;] bg-gradient-to-r from-blue-400  hover:from-blue-600 text-black px-8";
    const secondaryButtonStyling = "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900";
    const warningButtonStyling = "border border-[#7c7c00;] bg-gradient-to-r from-yellow-400  hover:from-yellow-500 text-black px-8";
    const errorButtonStyling = "bg-red-500 border border-red-700 hover:bg-red-600 hover:border-red-900";

    if(styleType === "primary") {
        return primaryButtonStyling;
    } else if(styleType === "secondary") {
        return secondaryButtonStyling;
    } else if(styleType === "warning") {
        return warningButtonStyling;
    } else if(styleType === "error") {
        return errorButtonStyling;
    } else {
        return primaryButtonStyling;
    }
}

export default getButtonStyling;