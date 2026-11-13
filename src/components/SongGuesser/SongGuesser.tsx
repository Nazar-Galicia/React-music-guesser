import type {FC} from "react";
import Hero from "@/components/Hero/Hero.tsx";
import './SongGuesser.css'

const SongGuesser: FC = () => {
    return (
        <div className='song-guesser'>
            <Hero />
        </div>
    )
}

export default SongGuesser;