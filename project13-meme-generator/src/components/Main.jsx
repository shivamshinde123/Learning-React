import { useState } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simplt",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const handleChange = (event) => {
        const {value, name} = event.currentTarget
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]:value
            }
        })
    }

    return (
        <main>
            <div className="flex flex-col justify-center items-center gap-3 mt-7">
                <label className="flex flex-col text-lg w-1/3 font-bold">Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        className="border border-gray-400 p-1 mt-1 rounded-md"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label className="flex flex-col text-lg w-1/3 font-bold">Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        className="border border-gray-300 p-1 mt-1 rounded-md"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button className="bg-blue-300 p-4 rounded-xl w-1/3 text-xl font-bold">Get a new meme image 🖼</button>
            </div>
            <div className="flex flex-col mt-7 justify-center items-center">
                <img src={meme.imageUrl} className="w-1/3 rounded-xl" />
                <span className="m-2 text-lg font-bold">{meme.topText}</span>
                <span className="bottom text-lg font-bold">{meme.bottomText}</span>
            </div>
        </main>
    )
}
