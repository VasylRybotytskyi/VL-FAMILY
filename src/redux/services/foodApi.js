import { db } from "../../firebase/firebase";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const foodApi = createApi({
  reducerPath: "food",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    fetchSingleFood: builder.query({
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
    queryFood: builder.query({
      async queryFn() {
        try {
          const foodsRef = collection(db, "foods");
          let foods = [];
          const querySnapshot = await getDocs(foodsRef);

          querySnapshot.forEach((doc) => {
            foods.push({ id: doc.id, ...doc.data() });
          });

          return { data: foods };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),

    searchFood: builder.query({
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
  useSearchFoodQuery,
  useFetchSingleFoodQuery,
  useQueryFoodQuery,
} = foodApi;
