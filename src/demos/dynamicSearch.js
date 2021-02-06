import React, { useState } from 'react';
const SearchTemplate = () => {
    return(
        <>
            <SearchFunctional />
            <br/>
            <SearchClass />
        </>
    );
}
const SearchFunctional = () => {
    var citiesList = [
        "Allahabad",
        "Varanasi",
        "Gorakhpur",
        "Mumbai",
        "Chennai",
        "Kolkata"
    ];
    const [cityarray, filtercityarray] = useState(citiesList);
    const [totalres, changeTotalres] = useState(0);

    const changeHandler = (event) => {
        var filteredarray = citiesList.filter((i) => {
            return i.toLowerCase().includes(event.target.value.toLowerCase());
        });
        filtercityarray(filteredarray);
        changeTotalres(filteredarray.length);
    }

    return(
        <React.Fragment>
            <h3>Searching from functional component</h3>
            <div className="row pl-0 ml-0">
                <input type="text" className="form-control col-6 mb-md" name="search" autoComplete="off" onChange={changeHandler} placeholder="Enter text" />
                <div className="col-6">{totalres} Results found</div>
            </div>
            <ol className="mt-md">{cityarray.map((i, index) => <li key={i}>{i}</li>)}</ol>
        </React.Fragment>
    );
}

class SearchClass extends React.Component {
    constructor() {
        super();
        this.state = {
            citiesList : [
                "Allahabad",
                "Varanasi",
                "Gorakhpur",
                "Mumbai",
                "Chennai",
                "Kolkata"
            ],
            filteredarray : [],
            totalresult: 0
        };        
        this.changeHandler = this.changeHandler.bind(this);
    }
    componentDidMount() {
        this.setState((state) => ({
            filteredarray: state.citiesList
        }));
    }

    changeHandler(event) {
        var filteredarray = this.state.citiesList.filter((i) => {
            let inputvalue = event.target.value.toLowerCase();
            let arrValue = i.toLowerCase();
            return arrValue.includes(inputvalue);
        });  
        this.setState({totalresult: filteredarray.length})
        this.setState({filteredarray: filteredarray});      
    }
    render() {        
        return(
            <div>
                <h3>Searching from class component</h3>
                <div>
                    <input type="text" className="form-control col-6" name="search" autoComplete="off" onChange={this.changeHandler} />
                    &nbsp;{this.state.totalresult} Results found
                </div>
                {this.state.filteredarray.map((i, index) => <div key={i}>{index+1+'. ' + i}</div>)}
            </div>
        );
    }
}
export default SearchTemplate;