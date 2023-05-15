function MyForm(props) {
    let name = props.name
    console.log(name)
    return (
        
        <div>
            <label htmlFor="uname"><b>Username</b></label>
         <input type="text" placeholder="Enter Username" name="uname" />

            <label htmlFor="uname"><b>SureName</b></label>
            <input type="text" placeholder="Enter SureName" name="sname" />

            <button>Click me</button>
        </div>
    )
}

export default MyForm