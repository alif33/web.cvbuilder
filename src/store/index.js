import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./reducers"
import { Blog, Example, Information, Resume } from "./api"

const persistConfig = {
    key: 'root',
    whitelist: [
        // 'sample',
        'resume'
    ],
    storage,
    stateReconciler: autoMergeLevel2
}

export const store = configureStore({ 
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(Blog.middleware, Example.middleware, Information.middleware, Resume.middleware)
})

export const persistor = persistStore(store)