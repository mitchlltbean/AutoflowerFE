import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import "./style.css";

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='flower'
            active={activeItem === 'flower'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='concentrates'
            active={activeItem === 'concentrates'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='edibles'
            active={activeItem === 'edibles'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment>
            
        <img src='https://unsplash.com/photos/b2haCjfk_cM' />
         
        </Segment>
      
      </div>
    )
  }
}
