import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { useEffect, useState } from 'react';
const Prospects = () => {
	const [prospects, setProspects] = useState([]);
	const columns = [
		{ field: "_id", headerName: "ID", width: 90 },
		{ field: "name", headerName: "Name", width: 90 },
		{ field: "address", headerName: "Address", width: 90 },
		{ field: "bloodgroup", headerName: "Blood Type", width: 90 },
		{ field: "diseases", headerName: "Diseases", width: 90 },
		{
			field: "edit", headerName: "Edit", width: 90,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/admin/prospect/${params.row._id}`}>
							<button className='bg-gray-400 text-white cursor-pointer w-[70px]'>
								Edit
							</button>
						</Link>
					</>
				);
			}
		},
	]
	const rows = [{ id: "abc", name: "xyz", address: "pqrs", bloodType: "A+", disease: "mno", }];
	useEffect(() => {
			const getProspects = async() => {
				try {
					const res = await publicRequest.get("/prospects");
					setProspects(res.data);
				}
				catch (error) {
					console.log(error);
				}
			}
			getProspects();
		}, [])
	return (
		<div className="w-[70vw]">
			<div className="flex items-center justify-between m-[30px]">
				<h1 className="p-[20px] text-[20px] font-semibold">All Prospects</h1>
				{/* <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold"> New Donor</button> */}
			</div>
			<div className="m-[30px]">
				<DataGrid rows={prospects} getRowId={(row) => row._id} checkboxSelection columns={columns} />
			</div>
		</div>
	)
}

export default Prospects