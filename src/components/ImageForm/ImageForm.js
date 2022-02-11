import TypeAnimation from 'react-type-animation';

const ImageForm = ({ userLoggedIn, onInputChange, onUrlSubmit }) => {
    return (
        <section className='food-detector__image-form'>
            <header className='food-detector__header'>
                <h1 className='heading__text--main'>Visuel</h1>
                <h4 className="heading__text--sub">A food image recognition app</h4>
            </header>
            <div className="keyword-animation">
                <h2 className='heading__text--sub'>Image keyword:</h2>
                {/* Change sequence to include type 3 keywords */}
                <TypeAnimation
                    className="heading__text--sub typed-text"
                    cursor={true}
                    repeat={Infinity}
                    sequence={[ '', 1300,
                                'Syrup', 1600,
                                '', 1300,
                                'Sweet', 1600,
                                '', 1300, 
                                'Pancake', 1600]}
                    wrapper="h3"
                />
            </div>
            {/* <div>
                <img src="../../assets/img/undraw_artificial_intelligence_re_enpp.svg" alt="" />
            </div> */}
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