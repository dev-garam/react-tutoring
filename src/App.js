import React, { Component, createRef } from 'react'

class App extends Component {
    id = 1
    state = {
        username: '',
        password: '',
        list: [],
        upName: '',
        upPwd: '',
    }

    usernameInput = createRef()

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value,
        })
    }

    handleInsert = (e) => {
        e.preventDefault()
        const { list, username, password } = this.state

        this.setState({
            list: list.concat({
                username,
                password,
                id: this.id,
                status: false,
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
            list: this.state.list.filter((user) => user.id !== id),
        })
    }

    handleUpdate = (id, status) => {
        if (status == false) {
            const { list } = this.state
            this.setState({
                list: list.map((obj) => {
                    if (obj.id === id) {
                        return {
                            ...obj,
                            status: true,
                        }
                    } else {
                        return {
                            ...obj,
                            status: false,
                        }
                    }
                }),
            })
        }
    }
    handleSave = (id) => {
        const { list, upName, upPwd } = this.state
        console.log(upName)
        console.log(upPwd)
        this.setState({
            list: list.map((obj) => {
                if (obj.id === id) {
                    return {
                        ...obj,
                        username: upName,
                        password: upPwd,
                        status: false,
                    }
                } else {
                    return obj
                }
            }),
        })
    }

    render() {
        const { list, username, password, upName, upPwd } = this.state
        return (
            <div>
                <form onSubmit={this.handleInsert}>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={this.handleChange}
                        ref={this.usernameInput}
                    />
                    <input
                        type="text"
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                    />
                    <button type="submit">추가하기</button>
                </form>
                <ul>
                    {list.map((user) => {
                        return (
                            <li key={user.id}>
                                {user.username} 의 비밀번호는 {user.password} 입니다.
                                <br />
                                <button onClick={() => this.handleDelete(user.id)}>
                                    삭제하기
                                </button>
                                <button
                                    onClick={() =>
                                        this.handleUpdate(user.id, user.status)
                                    }
                                >
                                    수정하기
                                </button>
                                {user.status === true && (
                                    <div>
                                        <br />
                                        <input
                                            type="text"
                                            name="upName"
                                            defaultValue={user.username}
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            type="text"
                                            name="upPwd"
                                            defaultValue={user.password}
                                            onChange={this.handleChange}
                                        />
                                        <button onClick={() => this.handleSave(user.id)}>
                                            저장
                                        </button>
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default App
