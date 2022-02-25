// import React, {useEffect} from 'react';
// import {} from 'react-native';
// import {firebase} from '@react-native-firebase/firestore';
// import {useEffect} from 'react';

// const ref = firebase.firestore().collection('UserDetails');

// const FetchingData = async () => {
//   const [blogs, setBlogs] = useState([]);

//   const fetching = () => {
//     try {
//       const data = await ref.get();
//       data.docs.forEach(item => {
//         setBlogs([...blogs, item.data()]);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   console.log(blogs);

//   useEffect(() => {
//     fetching();
//   }, []);
// };
