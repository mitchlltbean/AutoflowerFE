import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import img from "./marrywanna.jpg";
import "./style.css";

// import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';




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
                {/*//TODO onClick="" to toggle menu open/closed*/}
                <img src={img} alt="weed" />
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

            <Menu.Item
            as={NavLink}
            to="/"
            name="Log Out"
            active={activePage === "/"}
            onClick={this.handleTabClick}>

          </Menu.Item>

          </Segment>
        </Grid.Row>
      </div>
    );
  }
}
