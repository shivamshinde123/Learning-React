
import ReactMarkdown from 'react-markdown'


const RecipeList = (props) => {


    return (
        <section className='mt-10 text-center text-2xl w-1/2 m-auto'>
            {props.recipe ? <h2 className='text-3xl font-bold mb-5'>Try This Recipe!</h2> : null}
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}


export default RecipeList