import React from 'react';
import '../css/Transcation.css';
import { transaction } from '../../dummyData/transcation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Transcation = () => {
	const data = transaction.map((data, index) => (
		<tr key={data.id}>
			<td>{index + 1}</td>
			<td>{data.user}</td>
			<td>{data.bukti}</td>
			<td>{data.remaining} Hari</td>
			<td
				style={{
					color: data.status == 'active' ? '#0ACF83' : '#FF0742'
				}}
			>
				{data.status}
			</td>
			<td
				style={{
					color:
						data.status_payment == 'approve'
							? '#0ACF83'
							: data.status_payment == 'pending' ? '#F7941E' : '#FF0742'
				}}
			>
				{data.status_payment}
			</td>
			<td>
				<span style={{ fontSize: '20px', cursor: 'pointer', color: '#1C9CD2' }}>
					<div className="dropdown">
						<div className="dropdown-content">
							<label htmlFor="">Active</label>
						</div>
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
				</span>
			</td>
		</tr>
	));

	return (
		<div className="transcation-container">
			<h1>Incoming Transcation</h1>
			<table className="transcation-table">
				<thead>
					<tr>
						<th>No</th>
						<th>Users</th>
						<th>Bukti Transfer</th>
						<th>Remaining Aktif</th>
						<th>Status User</th>
						<th>Status Payment</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</table>
		</div>
	);
};

export default Transcation;
