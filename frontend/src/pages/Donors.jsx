import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Donors = () => {
	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{ field: "name", headerName: "Name", width: 90 },
		{ field: "address", headerName: "Address", width: 90 },
		{ field: "bloodType", headerName: "Blood Type", width: 90 },
		{ field: "disease", headerName: "Diseases", width: 90 },
		{
			field: "edit", headerName: "Edit", width: 90,
			renderCell: () => {
				return (
					<>
						<Link to={`/admin/donor/123`}>
							<button className='bg-gray-400 text-white cursor-pointer w-[70px]'>
								Edit
							</button>
						</Link>
					</>
				);
			}
		},
		{
			field: "delete", headerName: "Delete", width: 90,
			renderCell: () => {
				return (
					<>
						<FaTrash className='text-red-500 cursor-pointer m-2' />
					</>
				)
			}
		},
	]
	const rows = [{ id: "abc", name: "xyz", address: "pqrs", bloodType: "A+", disease: "mno", }];
	return (
		<div className="w-[70vw]">
			<div className="flex items-center justify-between m-[30px]">
				<h1 className="p-[20px] text-[20px] font-semibold">All Donors</h1>
				<Link to="/admin/newdonor">
					<button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold"> New Donor</button>
				</Link>
			</div>
			<div className="m-[30px]">
				<DataGrid rows={rows} checkboxSelection columns={columns} />
			</div>
		</div>
	)
}

export default Donors