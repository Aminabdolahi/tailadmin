import Image from "next/image";
import { Linktype } from "./types";

const CustomAccordeon = (props : Linktype) => {
    return (
        <div>
            <div>
                <Image src={props.icon} height={10} width={10} alt=""/>
                <span>{props.title}</span>
                <Image src={"./svg/SvgDown.tsx"} className="" height={10} width={10} alt=""/>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default CustomAccordeon;