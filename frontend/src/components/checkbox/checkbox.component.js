import { CheckMark, CheckMarkCircle, CheckMarkKick, CheckMarkStem } from "./checkbox.styles"

export const CheckBox = () => {
    return(
        <CheckMark>
            <CheckMarkCircle/>
            <CheckMarkStem/>
            <CheckMarkKick/>
        </CheckMark>
    )
}