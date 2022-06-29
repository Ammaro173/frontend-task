// import { mdbreact } from 'mdbreact'; 
export default function NavBar() {
	return (
		<><nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="#">Home</a></li>
				<li className="breadcrumb-item"><a href="#">Administration</a></li>
				<li className="breadcrumb-item active" aria-current="page">Logger search</li>
			</ol>
			<hr />
		</nav></>
	);
}
