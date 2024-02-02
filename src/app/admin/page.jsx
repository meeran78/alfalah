import { auth } from "@/lib/auth"
import styles from './admin.module.css'
import AdminUserForm from "@/components/adminUserForm/AdminUserForm"
const Admin = async () => {
  const session = await auth()

  return (
    <div>
      <AdminUserForm />
    </div>
  )
}

export default Admin