import React, { Component, createRef } from 'react'

class App extends Component {
  id = 1
  state = {
    username: '',
    password : '',
    list : [],
  }

  usernameInput = createRef()

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
    // current 를 붙히는 이유
    /*
      javascript의 dom 구조를 알면 이해가편함
      console.log(this.usernameInput 을 출력해보면 current 안에 input tag 가 있음)
    */
    this.usernameInput.current.focus()
  }
  
  handleDelete = (id) => {
    // const{ list } = this.state
    // const copideList = list.slice()
    // const index = list.findIndex(user=> user.id === id)
    // copideList.splice(index, 1)
    // this.setState({
    //   list : copideList
    // })
    

  this.setState({
    list: this.state.list.filter((user) => user.id !== id)
  })

  }
 
  render() {
    const {list, username, password} = this.state
    return (

      <div>
        <form onSubmit={this.handleInsert}>
          <input type="text" value={username} name="username" onChange={this.handleChange} ref={this.usernameInput}/>
          <input type="text" value={password} name="password" onChange={this.handleChange} />
          <button type="submit">추가하기</button>
        </form>
        <ul>
          {
            list.map((user) => {
              return (
                <li key={user.id}>
                  {user.username} 의 비밀번호는 {user.password} 입니다.
                  <br />
                <button onClick={() => this.handleDelete(user.id)}>삭제하기</button>
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