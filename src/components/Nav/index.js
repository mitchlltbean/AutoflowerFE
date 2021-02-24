import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class Nav extends Component {
  state = { activePage: "owner" };

  handleTabClick = (e, { name }) => this.setState({ activePage: name });

  render() {
    const { activePage } = this.state;
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="Weedvintory"
              active={activePage === "Weedvintory"}
              onClick={this.handleTabClick}
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
            Here be words... lots a words... so many words there might even be 5
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
