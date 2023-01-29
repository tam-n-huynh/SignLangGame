import tam_photo from '../../../assets/tam_photo.jpg'
import julie_photo from '../../../assets/julie_photo.jpg'

const Dev = () => {
    return (
        <div className="dev-info-container">
            <section className="dev-photos">
                <img src={ tam_photo } alt="Tam Huynh" width="48%" height="auto" className="dev-img" />
                <img src={ julie_photo } alt="Julie Maricic-Detweiler" width="35%" height="auto" className="dev-img"/>
            </section>
            <section className="meet-devs-section">
                <div className="meet-devs-heading">
                    <p >Meet the Devs!</p>
                    <div className="line"/>
                </div>
                <div className="biographies">
                    <p className="dev-name"> <i>Tam Huynh</i></p>
                    <p className="dev-description">
                        Tam is a 3rd year Computer Science major at the University of Florida.
                        He is interested in exploring the field of machine learning and 
                        artificial intelligence.
                    </p>
                    <p className="dev-name"> <i>Julie Maričić-Detweiler</i> </p>
                    <p className="dev-description">
                        Julie is a 3rd year Computer Science major at the University of Florida.
                        She enjoys designing and creating web applications. She also hopes to
                        learn more about machine learning in the future.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Dev