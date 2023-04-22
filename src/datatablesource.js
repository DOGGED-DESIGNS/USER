export const userColumns = [
  { field: "title", headerName: "TITLE", width: 90 },
  {
    field: "note",
    headerName: "NOTES",
    width: 230,
    // renderCell: (params) => {
    //   return (
    //     <div className=" d-flex   ">
    //       <img
    //         className=" img-fluid rounded-circle"
    //         style={{ width: "32px", height: "32px" }}
    //         src={params.row.img}
    //         alt="avatar"
    //       />
    //       <p className=" my-auto ml-2 font-weight-bold text-secondary">
    //         {params.row.username}
    //       </p>
    //     </div>
    //   );
    // },
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className=" ">
          <p className={`text-center ${params.row.status}`}>
            {params.row.status}
          </p>
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "snow",
    img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    status: "Approved",
    email: "uzoechijeremiah@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "snow",
    img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    status: "Passive",
    email: "uzoechijeremiah@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "snow",
    img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    status: "Approved",
    email: "uzoechijeremiah@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "snow",
    img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    status: "Pending",
    email: "uzoechijeremiah@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "snow",
    img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    status: "Approved",
    email: "uzoechijeremiah@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "snow",
    img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    status: "Approved",
    email: "uzoechijeremiah@gmail.com",
    age: 35,
  },
];
