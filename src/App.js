import React, { Component } from 'react'

class App extends Component {
  state = {
    username: '',
    password : '',
    id : 0,
    list : [],
  }

  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
    
  }
  
  handleInsert = () => {
		const {list, username, password, id} = this.state
		this.setState({
      id: id + 1,
			list: list.concat({
        id,
				username,
        password,
			}),
			username: '',
			password: '',
		})
	}
 
  render() {

    return (

      <div>
        <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
        <br />
        <input type="text" value={this.state.password} name="password" onChange={this.handleChange}/>
        <br />
        <button onClick={this.handleInsert}>추가하기</button>

        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={item.id}>
                  {item.username} 의 비밀번호는 {item.password} 입니다.
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