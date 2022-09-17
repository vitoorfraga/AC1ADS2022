import './global.css'

export default function Button() {
    // const button = document.querySelector('.button')

    // const msgInput = document.querySelector('#msg')

    // function handleKeyboard(event) {
    //     if (event.key === 'Enter') {
    //         event.preventDefault();
    //     }
    // }

    // msgInput.addEventListener('keydown', handleKeyboard)

    // button.addEventListener('click', function () {
    //     const msgValue = msgInput.value
    //     console.log(msgValue)

    //     const msgArea = document.querySelector('.msgArea')
    //     msgArea.innerHTML = msgValue
    // })

    return (
        < div className='container' >
            <form className='form'>
                <div >
                    <label for="msg">Mensagem:</label>
                    <input type="text" id="msg" />
                </div>

                <div class="button">
                    <div className='button'>Clique Aqui</div>
                </div>
            </form>
            <div>
                <p className='msgArea'>...</p>
            </div>
        </div>
    );
}
