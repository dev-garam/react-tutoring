import React, { Component } from 'react'

class App extends Component {
  id = 1
  state = {
    username: '',
    password : '',
    list : [],
  }

  usernameInput = null

  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
    
  }
  
  handleInsert = (e) => {
    e.preventDefault()
    const {list, username, password} = this.state
    
		this.setState({
			list: list.concat({
				username,
        password,
        id : this.id
			}),
			username: '',
      password: '',
    })
    this.id++
    console.log(this.usernameInput)
    this.usernameInput.focus()
	}
 
  render() {
    const {list, username, password} = this.state
    return (

      <div>
        <form onSubmit={this.handleInsert}>
          <input type="text" value={username} name="username" onChange={this.handleChange} ref={(ref) => (this.usernameInput = ref)}/>
          <input type="text" value={password} name="password" onChange={this.handleChange} />
          <button type="submit">추가하기</button>
        </form>
        <ul>
          {
            list.map((user) => {
              return (
                <li key={user.id}>
                  {user.username} 의 비밀번호는 {user.password} 입니다.
                </li>
              )
            })
          }

        </ul>
      </div>

    )
  }
}

export default App