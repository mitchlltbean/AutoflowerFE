import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import "./style.css";

// import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";

export default class Navbar extends Component {
  state = { activePage: "Home" };

  handleTabClick = (e, { name }) => this.setState({ activePage: name });

  render() {
    const { activePage } = this.state;
    return (
      <div id="navBar">
        <Grid.Row stretched>
          <Segment inverted>
            <Menu inverted pointing secondary>
              <Menu.Item>
                <span></span>
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to="/dashboard"
                name="Home"
                active={activePage === "Dashboard"}
                onClick={this.handleTabClick}
              />
              <Menu.Item
                as={NavLink}
                to="/order"
                name="Order"
                active={activePage === "Order"}
                onClick={this.handleTabClick}
              />
              <Menu.Item
                as={NavLink}
                to="/add"
                name="Add"
                active={activePage === "Add"}
                onClick={this.handleTabClick}
              />
            </Menu>
          </Segment>
        </Grid.Row>
      </div>
    );
  }
}
