import type {FC} from "react";
import './Background.css'

const Background: FC = () => {
    return (
        <div className="background" aria-hidden="true">
            <div className="background__circle background__circle--top-left" />
            <div className="background__circle background__circle--top-center" />
            <div className="background__circle background__circle--top-right" />
            <div className="background__circle background__circle--right" />
            <div className="background__circle background__circle--bottom-left" />
            <div className="background__circle background__circle--bottom-right" />
            <div className="background__circle background__circle--bottom-center" />

            <div className="background__circle background__circle--center-one" />
            <div className="background__circle background__circle--center-two" />
            <div className="background__circle background__circle--center-three" />
            <div className="background__circle background__circle--center-four" />
            <div className="background__circle background__circle--center-five" />
            <div className="background__circle background__circle--center-six" />

            <div className="background__ring background__ring--top" />
            <div className="background__ring background__ring--bottom-left" />

            <div className="background__dot background__dot--left" />
            <div className="background__dot background__dot--right" />
        </div>
    )
}

export default Background