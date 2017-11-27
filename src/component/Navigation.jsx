import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarItem, NavbarStart, NavbarEnd, Icon, Button, NavbarBurger, NavbarMenu, NavbarDropdown, NavbarDivider, NavbarLink, brand, Field, Control} from 'bloomer';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }
  
  render() {
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <img src={brand} style={{ marginRight: 5 }} /> Bloomer
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
            <Icon icon='github' />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
            <Icon icon='twitter' style={{ color: '#55acee' }} />
          </NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
            <NavbarItem href='#/'>My list</NavbarItem>
            <NavbarItem href='#/' onClick={() => this.props.onGetTopRated()}>Top Rated</NavbarItem>
            <NavbarItem href='#/' onClick={() => this.props.onGetPopular()}>Popular</NavbarItem>
            <NavbarItem href='#/'>Home</NavbarItem> 
            <div id="search" className="Search">
              <input onKeyUp={this.handleKeyUp} onChange={(e) => this.props.onSearchChange(e.target.value)} type="search" placeholder="Search for a title..."/>
            </div>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink href='#/view' style={{color: 'white'}}>View</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href='#/' className="black" onClick={() => {
                  localStorage.setItem('view', 'box'),
                  window.location.reload()
                }}>Vertical List Box</NavbarItem>
                <NavbarDivider />
                <NavbarItem href='#/' className="black" onClick={() => {localStorage.setItem('view', 'card'), window.location.reload()}}>Horizontal Card</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
        </NavbarMenu>

        <NavbarMenu>
          <NavbarEnd>
            <NavbarItem href='#/'>Alecks Johannsen</NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}
