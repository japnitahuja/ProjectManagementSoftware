import { CheckMark, CheckMarkCircle, CheckMarkKick, CheckMarkStem } from "./Checkbox.styles"

export const CheckBox = () => {
    return(
        <CheckMark>
            <CheckMarkCircle/>
            <CheckMarkStem/>
            <CheckMarkKick/>
        </CheckMark>
    )
}