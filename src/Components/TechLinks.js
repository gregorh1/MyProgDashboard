import React, {Component} from 'react';
import LinkItem from "./LinkItem";

class TechLinks extends Component {
    constructor() {
        super();
        this.state = {
            link: '',
            desc: ''
        }
    }

    handleOnSubmit(newLinks, index, event) {
        event.preventDefault();
        this.setState(
            function () {
                this.props.updateLinks(newLinks, index);
            });
    }

    handleOnChangeLink(event) {
        this.setState({link: event.target.value});
    }

    handleOnChangeDesc(event) {
        this.setState({desc: event.target.value});
    }

    render() {
        let linkItems;
        linkItems = this.props.data.links.map((link, i) => {
            return <LinkItem
                link={link}
                key={i}
                index={this.props.index}
                linkIndex={i}
                deleteLink={this.props.deleteLink}
            />;
        });


        return (
            <div className="card border-secondary mb-3">
                <div className="card-header text-secondary"><h5>TODO i linki</h5></div>
                <div className="card-body">

                    <form onSubmit={this.handleOnSubmit.bind(this, this.state, this.props.index)}>
                        <div className="row mb-2">
                            <div className="col">
                                <input onChange={this.handleOnChangeDesc.bind(this)}
                                       type="text"
                                       className="form-control"
                                       placeholder="TODO, Task or whatever"/>
                            </div>
                            <div className="col-2">
                                <input onChange={this.handleOnChangeLink.bind(this)}
                                       type="text"
                                       className="form-control"
                                       placeholder="Link"/>
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

export default TechLinks;