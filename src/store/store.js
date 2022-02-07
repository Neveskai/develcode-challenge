import { configureStore } from '@reduxjs/toolkit'
import User from './store.user'

export default configureStore({
    reducer: {
        user: User,
    }
})