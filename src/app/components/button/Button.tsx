function Button ({text, full} : ButtonProps){
    const borderStyle = (full ? "bg-greenPastel text-greenPastel " : "text-greenPastel " );
 return (
    <button className={`${borderStyle} rounded border-greenPastel border-2 p-2`}>
        {text}
    </button>
 )
}

type ButtonProps = {
    text: string,
    full: boolean
}

export default Button