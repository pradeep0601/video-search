import React from "react";

export class SearchBar extends React.Component {
    state = {
        term: ""
    }
    searchBoxRef = React.createRef();

    componentDidMount() {
       this.searchBoxRef.current.focus();
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return(
            <div className="ui raised segment">
                <label className="ui red ribbon label">Search Video</label>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input type = "text" ref = {this.searchBoxRef} value={this.state.term} onChange = {this.onInputChange}></input>
                    </div>
                </form>
                <label class="ui teal right ribbon label">&copy;Pradeep Kumar</label>
            </div>
        );
    }
}