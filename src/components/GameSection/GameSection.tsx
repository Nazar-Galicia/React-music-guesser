import {
    Headphones,
    Play,
    Search,
    ChevronRight,
    Lightbulb,
    Music2
} from "lucide-react";
import type {FC} from "react";

const GameSection: FC = () => {
    return (
        <section className="game-panel">
            <div className="game-panel__attempt">
                <span className="game-panel__attempt-icon">
                    <Headphones />
                </span>

                <span>
                    Attempt <strong>1</strong> / 5
                </span>
            </div>

            <div className="game-panel__decoration">
                <Music2 />
            </div>

            <div className="game-panel__player">
                <div className="game-panel__player-rings">
                    <button
                        className="game-panel__play-button"
                        type="button"
                        aria-label="Play song"
                    >
                        <Play fill="currentColor" />
                    </button>
                </div>
            </div>

            <form className="game-panel__form">
                <label className="game-panel__input-wrapper">
                    <Search className="game-panel__search-icon" />

                    <input
                        className="game-panel__input"
                        type="text"
                        placeholder="Enter the song title..."
                    />
                </label>

                <button
                    className="game-panel__guess-button"
                    type="submit"
                >
                    Guess
                    <ChevronRight />
                </button>
            </form>

            <button
                className="game-panel__hint-button"
                type="button"
            >
                <span className="game-panel__hint-content">
                    <Lightbulb />
                    Need a hint?
                </span>

                <span className="game-panel__hint-divider"></span>

                <span className="game-panel__hint-cost">
                    -1 attempt
                </span>
            </button>
        </section>
    )
}

export default GameSection