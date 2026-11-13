import type {FC} from "react";
import Hero from "@/components/Hero/Hero.tsx";
import './SongGuesser.css'
import GameSection from "@/components/GameSection/GameSection.tsx";

const SongGuesser: FC = () => {
    return (
        <div className='song-guesser'>
            <Hero />
            <GameSection />
        </div>
    )
}

export default SongGuesser;