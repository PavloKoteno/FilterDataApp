import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import InfoModal from './InfoModal';
import SortButton from './SortButton';
import { sortByTitle, sortByUsername, sortByDate, sortBySpentTime } from '../../services/sort-service';

export default function Page({ nodes }) {
    const [nodeList, setNodeList] = useState(nodes);
    const [filter, setFilter] = useState(null);

    function sortTitleHandle() {
        if (filter === 'titleASC') {
            setFilter('titleDESC');
            setNodeList(sortByTitle(nodes, 'DESC'));
        } else {
            setFilter('titleASC');
            setNodeList(sortByTitle(nodes, 'ASC'));
        }
    }

    function sortUsernameHandle() {
        if (filter === 'usernameASC') {
            setFilter('usernameDESC');
            setNodeList(sortByUsername(nodes, 'DESC'));
        } else {
            setFilter('usernameASC');
            setNodeList(sortByUsername(nodes, 'ASC'));
        }
    }

    function sortDateHandle() {
        if (filter === 'dateASC') {
            setFilter('dateDESC');
            setNodeList(sortByDate(nodes, 'DESC'));
        } else {
            setFilter('dateASC');
            setNodeList(sortByDate(nodes, 'ASC'));
        }
    }

    function sortSpentTimeHandle() {
        if (filter === 'spentASC') {
            setFilter('spentDESC');
            setNodeList(sortBySpentTime(nodes, 'DESC'));
        } else {
            setFilter('spentASC');
            setNodeList(sortBySpentTime(nodes, 'ASC'));
        }
    }

    if (!nodeList) {
        return <h1>Loading...</h1>
    }

    return (
        <Table id='timelog-table' striped hover>
            <thead>
                <tr className="table-primary">
                    <th scope='col-num'>#</th>
                    <th scope='col-title'>Title<SortButton clickHandle={sortTitleHandle} /></th>
                    <th scope='col-user'>User<SortButton clickHandle={sortUsernameHandle} /></th>
                    <th scope='col-date'>Date<SortButton clickHandle={sortDateHandle} /></th>
                    <th scope='col-time' className='text-end'>Time Spent<SortButton clickHandle={sortSpentTimeHandle} /></th>
                </tr>
            </thead>
            <tbody>
                {nodeList.map((node, index) => {
                    const { issue, user, spentAt, timeSpent } = node;
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <strong>{issue.title}</strong>
                                <InfoModal node={node} />
                            </td>
                            <td><span>{user.username}</span></td>
                            <td><span>{spentAt}</span></td>
                            <td className='text-end'><span>{timeSpent}</span></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )
}
