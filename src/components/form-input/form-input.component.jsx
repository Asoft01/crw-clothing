const FormInput = ({ label, changeHandler, value }) => {
    return (
        <div>
            <label>{ label }</label>
                <input
                type="text"
                required
                onChange={changeHandler}
                name="displayName"
                value={displayName}
            />
        </div>
    )
}