import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import "./style.css";

export default class sideMenu extends Component {
  state = { activePage: "Home" };

  handleTabClick = (e, { name }) => this.setState({ activePage: name });

  render() {
    const { activePage } = this.state;
    return (
      <div>
        <Grid.Row stretched>
          <Segment inverted>
            <Menu inverted pointing secondary>
              <Menu.Item
                as={NavLink}
                to="/home"
                name="Home"
                active={activePage === "Home"}
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
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="Weedvintory"
                active={activePage === "Weedvintory"}
                onClick={this.handleTabClick}
                // TODO have onclick render component for each item
                // TODO link this to components that will hold the information from the database, perhaps rope it in with the active Page state
                // TODO create event listoners for each tab so that it renders the right information when selected
              />
              <Menu.Item
                name="Employees"
                active={activePage === "Employees"}
                onClick={this.handleTabClick}
              />
              <Menu.Item
                name="Sales/Stats"
                active={activePage === "Sales/Stats"}
                onClick={this.handleTabClick}
              />
              <Menu.Item
                name="Pricing"
                active={activePage === "Pricing"}
                onClick={this.handleTabClick}
              />
              <Menu.Item
                name="Orders"
                active={activePage === "Orders"}
                onClick={this.handleTabClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            {/* TODO: probably want to switch between segments to correspond with the menu */}
            {/* TODO: possible dropdown with Help/Contact/FAQ type of deal */}
            <Segment>
              Here will be appended all the various information from the
              database
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
