// import './ImageForm.scss';

const ImageForm = ({ onInputChange, onUrlSubmit }) => {
    return (
        <section className='food-detector__image-form'>
            <header className='food-detector__header'>
                <h1 className='heading__text--main'>Visuel</h1>
                <h4 className="heading__text--sub">A food image recognition app</h4>
            </header>
            <form className='food-detector__form' onSubmit={onUrlSubmit}>
                <div className="food-detector__form-group">
                    <input className='food-detector__input' onChange={onInputChange} type="text" pattern="https://.*" placeholder='Paste image URL' required />
                    <button className='btn' type="submit">Detect</button>
                </div>
            </form>
        </section>
    )
};

export default ImageForm;