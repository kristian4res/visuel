const ImageForm = ({ userLoggedIn, onInputChange, onUrlSubmit }) => {
    return (
        <section className='food-detector__image-form'>
            <header className='food-detector__header'>
                <h1 className='heading__text--main'>Visuel</h1>
                <h4 className="heading__text--sub">A food image recognition app</h4>
            </header>
            <article className="app__description">
                <p className="app__description__text">
                    This is a spin-off of the Smart Brain project from ZTM Academy.
                    It uses Clarifai's food image model to analyze (food-related) images and generate a list of keywords that relate to the submitted image.
                    {/* 
                    To use the app, you are required to have an account (go to Register) in order to login.
                    After logging in, an input box should appear below this text where you will be able to paste the URL of an (food-related) image.
                    The results will be shown on the right handside (desktop view) or under the input box (mobile view).
                     */}
                </p>
            </article>
            {
                userLoggedIn 
                ? (<form className='food-detector__form' onSubmit={onUrlSubmit}>
                    <div className="food-detector__form-group">
                        <input className='food-detector__input' onChange={onInputChange} type="text" pattern="https://.*" placeholder='Paste image URL' required />
                        <button className='btn' type="submit">Detect</button>
                    </div>
                </form>)
                : <></>
            }
        </section>
    )
};

export default ImageForm;