import { configureStore } from '@reduxjs/toolkit'
import Users from './store.user'

export default configureStore({
    reducer: {
        users: Users,
    }
})