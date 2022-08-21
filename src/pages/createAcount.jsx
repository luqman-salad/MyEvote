const createAcount = () => {
    return(
        <div className="createAcount">
            <div className="createAcountContainer">
                <h2>MyEvote</h2>
                <h1>Sign Up for Free</h1>
                <form id="form">
                    <div className="formControl">
                        <label>User Name</label>
                        <input type="text" id="userName" placeholder="Enter your name"/>
                    </div>
                    <div className="formControl">
                        <label>Email</label>
                        <input type="email" id="email" placeholder="Enter your email"/>
                    </div>
                    <div className="formControl">
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Enter password"/>
                    </div>
                    <div className="formControl">
                        <label>Re-enter Password</label>
                        <input type="password" id="password" placeholder="Enter password again"/>
                    </div>

                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
            
        </div>
    );
}
export default createAcount;