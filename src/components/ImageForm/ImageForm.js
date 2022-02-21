// To use the app, you are required to have an account (go to Register) in order to login.
// After logging in, an input box should appear below this text where you will be able to paste the URL of an (food-related) image.
// The results will be shown on the right handside (desktop view) or under the input box (mobile view).

const ImageForm = ({ userDetails, userLoggedIn, onInputChange, input, onUrlSubmit }) => {
    return (
        <section className='food-detector__image-form'>
            <header className='food-detector__header'>
                <h1 className='heading__text--main'>Visuel</h1>
                <h3 className="heading__text--sub">A food image recognition app</h3>
            </header>
            <article className="app__description">
                { 
                    userLoggedIn && userDetails
                    ? (<h4 className="heading__text--sub profile__rank">
                        Welcome {userDetails.name || '<name>'}, so far you have made a total of {userDetails.image_entries || '<number of entries>'} entries (since last time)
                    </h4>)
                     :
                    (<p className="app__description__text">
                        This is a spin-off of the Smart Brain project from ZTM Academy.
                        It uses Clarifai's food image model to analyze (food-related) images and generate a list of keywords that relate to the submitted image.
                    </p>)     
                }
            </article>
            {
                userLoggedIn 
                ? (<form className='food-detector__form' onSubmit={onUrlSubmit}>
                    <div className="food-detector__form-group">
                        <input className='food-detector__input' onChange={onInputChange} value={input} type="text" pattern="https://.*" title="Image URL link" placeholder='Paste image URL' required />
                        <button className='btn' type="submit">Detect</button>
                    </div>
                </form>)
                : <></>
            }
        </section>
    )
};

export default ImageForm;