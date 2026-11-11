import type {FC} from "react";
import Background from "@/components/Background/Background.tsx";
import SongGuesser from "@/components/SongGuesser/SongGuesser.tsx";

const App: FC = () => {
    return (
        <>
            <Background />
            <SongGuesser />
        </>
    )
}

export default App