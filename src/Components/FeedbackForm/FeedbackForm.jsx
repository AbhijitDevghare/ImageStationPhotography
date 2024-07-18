function FeedbackForm()
{
    return(
        <>
                <div className="centerFlex">
                    <div className="feedFormbackDiv reg-loginFlex ">
                        <div>
                             <h2>Give Us FeedBack</h2> 
                        </div>
                    <form action="">
                                <div>
                                <label htmlFor="">Enter the feedback :</label>
                                <textarea name="" id="" rows={3} cols={40}></textarea>
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="">Rate Us - </label>
                                    <p></p>
                                </div>
                    </form>

                    </div>
                </div>
        </>
    )
}

export default FeedbackForm