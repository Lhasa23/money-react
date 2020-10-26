import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name: string
}

const MyIcon = (props: Props) => {
    return (
        <svg fill="#88FF60" className="icon">
            <use xlinkHref={`#${props.name}`} />
        </svg>
    )
}

export default MyIcon;
