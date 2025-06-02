<template>
  <div class="admin-container">
    <h2 class="text-center mb-4 text-white">Admin Management</h2>
    <Card class="p-shadow-4">
      <template #content>
        <!-- Add User Dialog -->
        <Dialog
          header="Add New User"
          v-model:visible="showAddUserDialog"
          modal
          :closable="false"
          :dismissableMask="true"
          style="width: 400px; border-radius: 15px"
          class="custom-dialog"
        >
          <template #header>
            <h2 class="dialog-header gradient-custom-2">Add New User</h2>
          </template>
          <div class="p-fluid mt-4">
            <FloatLabel class="mb-4">
              <InputText
                v-model="newUser.name"
                class="p-inputtext-sm w-full"
                type="text"
                id="newUserName"
              />
              <label for="newUserName">Username</label>
            </FloatLabel>
            <FloatLabel class="mb-4">
              <InputText
                v-model="newUser.email"
                class="p-inputtext-sm w-full"
                type="email"
                id="newUserEmail"
              />
              <label for="newUserEmail">Email</label>
            </FloatLabel>
            <FloatLabel class="mb-4">
              <InputText
                v-model="newUser.phone"
                class="p-inputtext-sm w-full"
                type="tel"
                id="newUserPhone"
              />
              <label for="newUserPhone">Phone</label>
            </FloatLabel>
            <FloatLabel class="mb-4">
              <InputText
                v-model="newUser.password"
                class="p-inputtext-sm w-full"
                type="password"
                id="newUserPassword"
              />
              <label for="newUserPassword">Password</label>
            </FloatLabel>
            <FloatLabel class="mb-4">
              <Dropdown
                v-model="newUser.role"
                :options="roleOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Select Role"
                class="w-full"
                id="newUserRole"
              />
              <label for="newUserRole">Role</label>
            </FloatLabel>
            <div v-if="addUserError" class="text-danger mb-3 text-center">
              <small>{{ addUserError }}</small>
            </div>
            <div class="text-center">
              <Button
                label="Save"
                class="gradient-custom-2 w-full mb-3"
                @click="addUser"
              />
              <Button
                label="Cancel"
                class="p-button-outlined p-button-success w-full bg-orange-400 text-50"
                @click="showAddUserDialog = false"
              />
            </div>
          </div>
        </Dialog>

        <!-- Edit User Dialog -->
        <Dialog
          header="Edit User"
          v-model:visible="showEditUserDialog"
          modal
          :closable="true"
          :dismissableMask="true"
          style="width: 400px; border-radius: 15px"
          class="custom-dialog"
        >
          <template #header>
            <h2 class="dialog-header gradient-custom-2">Edit User</h2>
          </template>
          <div class="p-fluid">
            <FloatLabel class="mb-4">
              <InputText
                v-model="editUser.name"
                class="p-inputtext-sm w-full"
                type="text"
                id="editUserName"
              />
              <label for="editUserName">Username</label>
            </FloatLabel>
            <FloatLabel class="mb-4">
              <InputText
                v-model="editUser.email"
                class="p-inputtext-sm w-full"
                type="email"
                id="editUserEmail"
              />
              <label for="editUserEmail">Email</label>
            </FloatLabel>
            <FloatLabel class="mb-4">
              <InputText
                v-model="editUser.phone"
                class="p-inputtext-sm w-full"
                type="tel"
                id="editUserPhone"
              />
              <label for="editUserPhone">Phone</label>
            </FloatLabel>
            <FloatLabel class="mb-4">
              <Dropdown
                v-model="editUser.role"
                :options="roleOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Select Role"
                class="w-full"
                id="editUserRole"
              />
              <label for="editUserRole">Role</label>
            </FloatLabel>
            <div v-if="editUserError" class="text-danger mb-3 text-center">
              <small>{{ editUserError }}</small>
            </div>
            <div class="text-center">
              <Button
                label="Save"
                class="gradient-custom-2 w-full mb-3"
                @click="updateUser"
              />
              <Button
                label="Cancel"
                class="p-button-outlined p-button-success bg-orange-400 text-50"
                @click="showEditUserDialog = false"
              />
            </div>
          </div>
        </Dialog>

        <!-- Delete User Dialog -->
        <Dialog
          header="Confirm Delete"
          v-model:visible="showDeleteUserDialog"
          modal
          :closable="false"
          :dismissableMask="true"
          style="width: 350px; border-radius: 15px"
          class="custom-dialog"
        >
          <template #header>
            <h2 class="dialog-header gradient-custom-2">Confirm Delete</h2>
          </template>
          <div class="p-fluid mt-5 text-center">
            <p>Are you sure you want to delete this user?</p>
            <div class="flex justify-center gap-3">
              <Button
                label="Yes"
                class="gradient-custom-2 w-1/2"
                @click="confirmDeleteUser"
              />
              <Button
                label="No"
                class="p-button-outlined p-button-success bg-orange-400 w-1/2 text-50"
                @click="showDeleteUserDialog = false"
              />
            </div>
          </div>
        </Dialog>

        <!-- User Table -->
        <div class="text-right mb-3">
          <Button
            label="Add User"
            icon="pi pi-plus"
            class="gradient-custom-2"
            @click="openAddUserDialog"
          />
        </div>
        <DataTable
          :value="users"
          :rows="10"
          :paginator="true"
          class="p-datatable-sm"
          :rowClass="() => 'custom-row'"
          v-if="users.length"
        >
          <Column field="id" header="ID" style="width: 10%"></Column>
          <Column field="name" header="Username" style="width: 20%"></Column>
          <Column field="email" header="Email" style="width: 25%"></Column>
          <Column field="phone" header="Phone" style="width: 20%"></Column>
          <Column field="role" header="Role" style="width: 15%"></Column>
          <Column header="Actions" style="width: 10%">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-text p-button-success mr-2"
                @click="openEditUserDialog(slotProps.data)"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-text p-button-danger"
                @click="openDeleteUserDialog(slotProps.data.id)"
              />
            </template>
          </Column>
        </DataTable>
        <div v-else class="text-center text-white">No users found</div>
      </template>
    </Card>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "primevue/usetoast";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";

export default {
  components: {
    DataTable,
    Column,
    Dialog,
    Button,
    InputText,
    FloatLabel,
    Dropdown,
    Card,
  },
  data() {
    return {
      users: [],
      showAddUserDialog: false,
      showEditUserDialog: false,
      showDeleteUserDialog: false, // Thêm biến để điều khiển dialog xác nhận xóa
      userToDelete: null, // Lưu trữ ID của người dùng cần xóa
      newUser: {
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "user",
      },
      editUser: {
        id: "",
        name: "",
        email: "",
        phone: "",
        role: "",
      },
      addUserError: "",
      editUserError: "",
      roleOptions: [
        { label: "User", value: "user" },
        { label: "Restaurant Manager", value: "restaurantManager" },
      ],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.users = response.data;
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to fetch users",
          life: 3000,
        });
        console.error(
          "Fetch users error:",
          error.response?.data || error.message
        );
      }
    },
    openAddUserDialog() {
      this.newUser = {
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "user",
      };
      this.addUserError = "";
      this.showAddUserDialog = true;
    },
    async addUser() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/user/create`,
          this.newUser,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data) {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "User added successfully",
            life: 3000,
          });
          this.showAddUserDialog = false;
          this.fetchUsers();
        }
      } catch (error) {
        this.addUserError =
          error.response?.data?.message || "Failed to add user";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.addUserError,
          life: 3000,
        });
        console.error("Add user error:", error.response?.data || error.message);
      }
    },
    openEditUserDialog(user) {
      this.editUser = { ...user };
      this.editUserError = "";
      this.showEditUserDialog = true;
    },
    async updateUser() {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/user/${this.editUser.id}`,
          {
            name: this.editUser.name,
            email: this.editUser.email,
            phone: this.editUser.phone,
            role: this.editUser.role,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data) {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "User updated successfully",
            life: 3000,
          });
          this.showEditUserDialog = false;
          this.fetchUsers();
        }
      } catch (error) {
        this.editUserError =
          error.response?.data?.error || "Failed to update user";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.editUserError,
          life: 5000,
        });
      }
    },
    openDeleteUserDialog(userId) {
      this.userToDelete = userId;
      this.showDeleteUserDialog = true;
    },
    async confirmDeleteUser() {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/user/${this.userToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data) {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "User deleted successfully",
            life: 3000,
          });
          this.showDeleteUserDialog = false;
          this.userToDelete = null;
          this.fetchUsers();
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to delete user",
          life: 3000,
        });
        this.showDeleteUserDialog = false;
        this.userToDelete = null;
      }
    },
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
};
</script>

<style scoped>
.admin-container {
  padding: 20px;
  background-color: #180318;
  min-height: calc(100vh - 60px);
}

.custom-dialog .p-dialog-content {
  padding: 0 !important;
}

.p-fluid .p-inputtext,
.p-fluid .p-dropdown {
  width: 100%;
}

.custom-row {
  background-color: #fff;
  border-bottom: 1px solid #dee2e6;
}

.custom-row:hover {
  background-color: #f8f9fa42;
}

.gradient-custom-2 {
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
  color: white;
  padding: 0.5rem;
}

.p-button-outlined.p-button-success {
  color: #000 !important;
  border-color: #000 !important;
}

.p-button-outlined.p-button-success:hover {
  background-color: #f9b233 !important;
  color: white !important;
}

.dialog-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #18181b;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
