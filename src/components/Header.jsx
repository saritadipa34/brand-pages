import Button from "./Button";

const Header=()=>{
    return(
        <div>
<nav  className="flex justify-between h-23b align-middle">
    <div >
<img  className="h-25" src="data:image/png;base64,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" />
</div>
            <ul className="flex mt-[35px]">
                <li className="mx-5">Menu</li>
                <li className="mx-5">Location</li>
                <li className="mx-5">About</li>
                <li className="mx-5">Contact</li>
            </ul>
         <Button name={"Login"} />
            </nav>
        </div>
    )
}

export default Header;