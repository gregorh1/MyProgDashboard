import React from 'react';

const LinkItem = (props) => {
    return (
        <tr>
            <th scope="row">{props.linkIndex + 1}</th>
            <td className="block">{props.link.desc}</td>
            <td>
                <a className="d-inline-block text-truncate"
                   style={{maxWidth: '150px'}}
                   href={props.link.link}
                   target="_blank">{props.link.link}</a>
            </td>
            <td>
                <button onClick={props.deleteLink.bind(this, props.linkIndex, props.index)}
                        className="btn btn-sm btn-secondary">Usuń
                </button>
            </td>
        </tr>
    );
};

export default LinkItem;