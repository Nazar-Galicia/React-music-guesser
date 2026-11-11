import type {FC} from "react";

const Hero: FC = () => {
    return (
        <section className="left-section">
            <div className="left-section__content">
                <div className="left-section__decoration left-section__decoration--top">
                    ♪
                </div>

                <div className="left-section__decoration left-section__decoration--left">
                    ♫
                </div>

                <div className="left-section__decoration left-section__decoration--right">
                    ♪
                </div>

                <div className="left-section__heading">
                    <h1 className="left-section__title">
                        Guess
                        <br />
                        the <span>Song</span>
                    </h1>

                    <div className="left-section__exclamation">
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <p className="left-section__description">
                    Listen to the <span>first note</span>
                    <br />
                    and try to guess the song!
                </p>

                <div className="left-section__music-note">
                    <span>♫</span>
                </div>
            </div>
        </section>
    )
}

export default Hero