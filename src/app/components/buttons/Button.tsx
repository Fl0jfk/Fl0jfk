import Link from "next/link";

function Button ({text, full , link} : ButtonProps){
    const borderStyle = (full ? "bg-green text-grey border-grey" : "text-green hover:scale-110 border-green" );
 return (
    <button className={`${borderStyle} rounded border-2 p-2 text-xl`}>
        <Link href={link}>
            {text}
        </Link>
    </button>
 )
}

type ButtonProps = {
    text: string,
    full: boolean,
    link: string
}

export default Button;