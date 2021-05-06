import React, { Component } from 'react';
import 'reset-css';
import NavbarScroller from './components/NavbarScroller'

const navigation = {
  brand: { name: "NavbarScroller", to: "/"},
  links: [
    { name: "Home", to: "/home" },
    { name: "Launches", to: "/launches" },
    { name: "Succeeded", to: "/succeeded" },
    { name: "Failed", to: "/failed" },
    { name: "Upcoming", to: "/upcoming"},
    { name: "Support", to: "/support"}
  ]
}

export default class App extends Component {
  // the public is a typescript feature
  public render () {
    // Destructured object for cleaner code
    const { brand, links } = navigation;
    return (
      <div className="App">
        <NavbarScroller brand={brand} links={links}/>
      </div>
    )
  }
}


