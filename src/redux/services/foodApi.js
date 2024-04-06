import { db } from "../../firebase/firebase";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const foodApi = createApi({
  reducerPath: "food",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    fetchSingleSneaker: builder.query({
      async queryFn(id) {
        try {
          const docRef = doc(db, "sneakers", id);
          const docSnapshot = await getDoc(docRef);
          return { data: { id: docSnapshot.id, ...docSnapshot.data() } };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),
    querySneaker: builder.query({
      async queryFn() {
        try {
          const sneakersRef = collection(db, "foods");
          let sneakers = [];
          const querySnapshot = await getDocs(sneakersRef);

          querySnapshot.forEach((doc) => {
            sneakers.push({ id: doc.id, ...doc.data() });
          });

          console.log("Filtered sneakers:", sneakers.length);

          return { data: sneakers };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),

    searchSneaker: builder.query({
      async queryFn({ q }) {
        try {
          const sneakersRef = collection(db, "sneakers");
          let sneakers = [];
          const querySnapshot = await getDocs(sneakersRef);

          const searchTerm = q?.toLowerCase();
          querySnapshot.forEach((doc) => {
            const name = doc.data().name.toLowerCase();
            if (name.includes(searchTerm)) {
              sneakers.push({ id: doc.id, ...doc.data() });
            }
          });

          return { data: sneakers };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),
  }),
});

export const {
  useSearchSneakerQuery,
  useFetchSingleSneakerQuery,
  useQuerySneakerQuery,
} = foodApi;
