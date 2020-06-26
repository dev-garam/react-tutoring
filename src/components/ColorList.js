import React, { Component } from 'react'
import './ColorList.css'

class ColorList extends Component {
    render() {
        const { input, setChange, setInsert, list, setUpdate, setRemove } = this.props
        return (
            <div>
                <form className="ColorList" onSubmit={(e) => setInsert(e, input)}>
                    <input
                        placeholder="원하는 색을 입력하세요"
                        onChange={setChange}
                        value={input}
                    />
                </form>
                <div className="ColorListBox">
                    {list &&
                        list.map((item) => {
                            const style = {
                                backgroundColor: item.color,
                                opacity: item.opacity,
                            }
                            return (
                                <div
                                    key={item.id}
                                    className={`ColorItem`}
                                    style={style}
                                    onClick={() => setUpdate(item.id)}
                                    onContextMenu={(e) => setRemove(e, item.id)}
                                ></div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ColorList
