import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

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
              name="owner"
              active={activePage === "owner"}
              onclick={this.handleTabClick}
            />
            <Menu.Item
              name="who"
              active={activePage === "who"}
              onclick={this.handleTabClick}
            />
            <Menu.Item
              name="what"
              active={activePage === "what"}
              onclick={this.handleTabClick}
            />
            <Menu.Item
              name="where"
              active={activePage === "where"}
              onclick={this.handleTabClick}
            />
            <Menu.Item
              name="when"
              active={activePage === "when"}
              onclick={this.handleTabClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            Here be words... lots a words... so many words there might even be 5
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
