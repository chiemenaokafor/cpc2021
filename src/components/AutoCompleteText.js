import React from "react";
import { BiUser, BiSearch } from "react-icons/bi";
import "./autocomplete.css";
export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      "Okafor Chiemena",
      "Sansusi Adewale",
      "Ibunkun Soyebo",
      "Ukpong Ini-obong",
      "Yawe Gabriel",
      "Ayegba Jesse",
      "Inaju Mitchel",
      "Laura Eno",
      "Adegbola Ogunleye",
      "Akindipe Anjola",
      "Iweala David",
      "John Micheal",
    ];
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");

      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className="searched-names">
        {suggestions.map((item) => (
          <li
            className="searched-item"
            onClick={() => this.suggestionSelected(item)}
          >
            <i className="search-user-icon">
              <BiUser />
            </i>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="search_group">
        <i className='input-search-icon'>
          <BiSearch />
        </i>
        <input
          value={text}
          className="search_bar"
          placeholder="Search for your setmates"
          type="text"
          onChange={this.onTextChanged}
        />
        <span className="input-group-btn">
          <button className="search_button" type="button">
            ENTER
          </button>
        </span>
        {this.renderSuggestions()}
      </div>
    );
  }
}
