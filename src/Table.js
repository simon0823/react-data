import React from 'react';

export default class Table extends React.Component {
    render() {
        return (
            <div>
                <table className="TableCarros">
                    <thead>
                        <tr>re
                            <td>Id</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Hobby</td>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.arrayCarros.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.age}</td>
                                    <td>{row.hobby}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}