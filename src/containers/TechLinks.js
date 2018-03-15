import React, {Component} from 'react';
import {connect} from 'react-redux';
import {linkDescOnSubmit, linkOnDelete} from '../actions/reducerActions';
import LinkItem from "../components/LinkItem";

class TechLinks extends Component {
    constructor() {
        super();
        this.state = {
            link: '',
            desc: ''
        }
    }

    handleOnChangeLink(event) {
        this.setState({link: event.target.value});
    }

    handleOnChangeDesc(event) {
        this.setState({desc: event.target.value});
    }

    render() {
        let linkItems;
        linkItems = this.props.reducer.techs[this.props.index].links.map((link, i) => {
            return <LinkItem
                link={link}
                key={i}
                index={this.props.index}
                linkIndex={i}
                deleteLink={this.props.linkOnDelete}
            />;
        });

        return (
            <div className="card border-secondary mb-3">
                <div className="card-header text-secondary"><h5>TODO i linki</h5></div>
                <div className="card-body">

                    <form onSubmit={this.props.linkDescOnSubmit.bind(this, this.props.index, this.state)}>
                        <div className="row mb-2">
                            <div className="col">
                                <input onChange={this.handleOnChangeDesc.bind(this)}
                                       type="text"
                                       className="form-control"
                                       placeholder="TODO, Task or whatever"
                                       required
                                />
                            </div>
                            <div className="col-2">
                                <input onChange={this.handleOnChangeLink.bind(this)}
                                       type="text"
                                       className="form-control"
                                       placeholder="Link"
                                       required
                                />
                            </div>
                            <div className="col-2">
                                <input type="submit" className="btn btn-secondary" value="Dodaj"/>
                            </div>
                        </div>
                    </form>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th className="border-top-0" scope="col ">#</th>
                            <th className="border-top-0" scope="col">Task</th>
                            <th className="border-top-0" scope="col">Link</th>
                            <th className="border-top-0" scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>

                        {linkItems}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reducer: state.reducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        linkDescOnSubmit: (index, newLink, event) => {
            event.preventDefault();
            dispatch(linkDescOnSubmit(index, newLink));
        },
        linkOnDelete: (index, linkIndex) => {
            dispatch(linkOnDelete(index, linkIndex))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TechLinks);
