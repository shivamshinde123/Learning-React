import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="flex justify-center items-center bg-blue-300 p-5 gap-10">
            <img 
                src={trollFace} 
            />
            <h1 className="text-3xl font-bold">Meme Generator</h1>
        </header>
    )
}