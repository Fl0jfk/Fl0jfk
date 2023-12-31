import Link from "next/link";

function LinkButton ({text, full , link} : ButtonProps){
    const borderStyle = (full ? "bg-green text-grey border-grey" : "text-green hover:scale-110 border-green" );
 return (
        <button className={`${borderStyle} rounded border-2 p-2 text-xl`} type="button" aria-label="Link">
            <Link href={link} aria-label="Link to section Contact">
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

export default LinkButton;