function Message() {
    const handleSubmit = ()=>{
        console.log("Message send");
    }
    return (
        <div id="message">
            <h1>Message Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="info">
                    <div className="name">
                        <label htmlFor="input_name">Name: </label>
                        <input type="text" id="input_name" />
                    </div>
                    <div className="email">
                        <label htmlFor="input_email">Email:</label>
                        <input type="email" id="input_email" />
                    </div>
                </div>
                <div className="message">
                    <label htmlFor="message">Enter your Message: </label>
                    <textarea id="message" cols="30" rows="10"></textarea>
                </div>
                <input  className="button" type="submit" value="Message Us"/>
            </form>
        </div>
    )
}

export default Message