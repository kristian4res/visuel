import './ImageLinkForm.scss';

const ImageLinkForm = ({ onInputChange, onUrlSubmit }) => {

    return (
        <div className='link-form'>
            <div>
            </div>
            <form className='link-form__group' onSubmit={onUrlSubmit}>
                <input className='link-form__input f4 pa2 w-70 center' onChange={onInputChange} type="url"  pattern="https://.*" placeholder='Paste image URL' />
                <button className='link-form__button w-20 grow f4 link ph3 pv2 dib black bg-white' type='submit'>Detect</button>
            </form>
        </div>

        // <div className='link-form'>
        //     <div className='link-form__image'>
        //     </div>
        //     <div className='link-form__group'>
        //         <input className='link-form__input' type="text" />
        //         <button className='link-form__button'>Detect</button>
        //     </div>
        // </div>
    )
};

export default ImageLinkForm;