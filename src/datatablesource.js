export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "MathenjwaFam",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "mathenjwafam@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Rose Shabangu",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "rose@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Alex MAthenjwa",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mathenjwa@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "David Ndlovu",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ndlovu@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Given Diash",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "diash@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Precious Ndlovu",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "precious@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Khesane Mndawwe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mndawe@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "John Mndawe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "john@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie mathenjwa",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "roxie@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Sabelo Khoza",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "khoza@gmail.com",
    status: "active",
    age: 65,
  },
];
