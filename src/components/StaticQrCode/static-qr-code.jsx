import './static-qr-code.css'

const QrComponent = () => {

    return (
        <div className='qr-container'>
            <img src='../../images/qr-code/image-qr-code.png' alt="QR code image" />
            <h1 className='title' >
                Improve your front-end skills by building projects
            </h1>
            <p>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    )

}

export default QrComponent