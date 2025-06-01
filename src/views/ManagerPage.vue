<!-- src/views/ManagerPage.vue -->
<template>
  <div class="manager-container">
    <h2 class="text-center text-white">Manager Dashboard</h2>

    <!-- Quản lý sản phẩm -->
    <Card class="p-shadow-4 mb-4">
      <template #content>
        <h3>Product Management</h3>
        <Button
          label="Add Product"
          class="gradient-custom-2 mb-3"
          @click="openAddProductDialog"
        />
        <DataTable
          :value="products"
          :rows="5"
          :paginator="true"
          class="p-datatable-sm"
        >
          <Column field="id" header="ID" style="width: 10%"></Column>
          <Column field="name" header="Name" style="width: 20%"></Column>
          <Column field="type" header="Type" style="width: 15%"></Column>
          <Column field="price" header="Price" style="width: 15%"></Column>
          <Column header="Actions" style="width: 20%">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-text p-button-success mr-2"
                @click="openEditProductDialog(slotProps.data)"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-text p-button-danger"
                @click="openDeleteProductDialog(slotProps.data.id)"
              />
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>

    <!-- Dialog thêm sản phẩm -->
    <Dialog
      header="Add Product"
      v-model:visible="showAddProductDialog"
      modal
      :closable="false"
      :dismissableMask="true"
      style="width: 400px; border-radius: 15px"
      class="custom-dialog"
    >
      <template #header>
        <h2 class="dialog-header gradient-custom-2">Add New Product</h2>
      </template>
      <div class="p-fluid mt-5">
        <FloatLabel class="mb-4">
          <InputText
            v-model="newProduct.name"
            class="p-inputtext-sm w-full"
            type="text"
            id="productName"
          />
          <label for="productName">Product Name</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="newProduct.type"
            class="p-inputtext-sm w-full"
            type="text"
            id="productType"
          />
          <label for="productType">Type</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="newProduct.desciption"
            class="p-inputtext-sm w-full"
            type="text"
            id="productDescription"
          />
          <label for="productDescription">Description</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="newProduct.price"
            class="p-inputtext-sm w-full"
            type="number"
            step="0.01"
            id="productPrice"
          />
          <label for="productPrice">Price</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="newProduct.image"
            class="p-inputtext-sm w-full"
            type="text"
            id="productImage"
          />
          <label for="productImage">Image URL</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="newProduct.link"
            class="p-inputtext-sm w-full"
            type="text"
            id="productLink"
          />
          <label for="productLink">Link</label>
        </FloatLabel>
        <div v-if="productError" class="text-danger mb-3 text-center">
          <small>{{ productError }}</small>
        </div>
        <div class="text-center">
          <Button
            label="Save"
            class="gradient-custom-2 w-full mb-3"
            @click="addProduct"
          />
          <Button
            label="Cancel"
            class="p-button-outlined p-button-success bg-orange-400 w-full text-50"
            @click="showAddProductDialog = false"
          />
        </div>
      </div>
    </Dialog>

    <!-- Dialog sửa sản phẩm -->
    <Dialog
      header="Edit Product"
      v-model:visible="showEditProductDialog"
      modal
      :closable="false"
      :dismissableMask="true"
      style="width: 400px; border-radius: 15px"
      class="custom-dialog"
    >
      <template #header>
        <h2 class="dialog-header gradient-custom-2">Edit Product</h2>
      </template>
      <div class="p-fluid mt-5">
        <FloatLabel class="mb-4">
          <InputText
            v-model="editProduct.name"
            class="p-inputtext-sm w-full"
            type="text"
            id="editProductName"
          />
          <label for="editProductName">Product Name</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="editProduct.type"
            class="p-inputtext-sm w-full"
            type="text"
            id="editProductType"
          />
          <label for="editProductType">Type</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="editProduct.desciption"
            class="p-inputtext-sm w-full"
            type="text"
            id="editProductDescription"
          />
          <label for="editProductDescription">Description</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="editProduct.price"
            class="p-inputtext-sm w-full"
            type="number"
            step="0.01"
            id="editProductPrice"
          />
          <label for="editProductPrice">Price</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="editProduct.image"
            class="p-inputtext-sm w-full"
            type="text"
            id="editProductImage"
          />
          <label for="editProductImage">Image URL</label>
        </FloatLabel>
        <FloatLabel class="mb-4">
          <InputText
            v-model="editProduct.link"
            class="p-inputtext-sm w-full"
            type="text"
            id="editProductLink"
          />
          <label for="editProductLink">Link</label>
        </FloatLabel>
        <div v-if="productError" class="text-danger mb-3 text-center">
          <small>{{ productError }}</small>
        </div>
        <div class="text-center">
          <Button
            label="Save"
            class="gradient-custom-2 w-full mb-3"
            @click="updateProduct"
          />
          <Button
            label="Cancel"
            class="gradient-custom-2 bg-orange-400 w-full text-50"
            @click="showEditProductDialog = false"
          />
        </div>
      </div>
    </Dialog>

    <!-- Dialog xác nhận xóa sản phẩm -->
    <Dialog
      header="Confirm Delete"
      v-model:visible="showDeleteProductDialog"
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
        <p>Are you sure you want to delete this product?</p>
        <div class="flex justify-center gap-3 mt-4">
          <Button
            label="Yes"
            class="gradient-custom-2 w-6"
            @click="confirmDeleteProduct"
          />
          <Button
            label="No"
            class="gradient-custom-2 bg-orange-400 w-6 text-50"
            @click="showDeleteProductDialog = false"
          />
        </div>
      </div>
    </Dialog>

    <!-- Quản lý đơn hàng -->
    <Card class="p-shadow-4 mb-4">
      <template #content>
        <h3>Order Management</h3>
        <DataTable
          :value="orders"
          :rows="5"
          :paginator="true"
          class="p-datatable-sm"
        >
          <Column field="id" header="Order ID" style="width: 20%"></Column>
          <Column field="total" header="Total" style="width: 20%"></Column>
          <Column field="created_at" header="Date" style="width: 30%">
            <template #body="slotProps">
              {{ formatDate(slotProps.data.created_at) }}
            </template>
          </Column>
          <Column
            field="recipient_name"
            header="Recipient"
            style="width: 30%"
          ></Column>
        </DataTable>
      </template>
    </Card>

    <!-- Xem số liệu đơn mua với biểu đồ -->
    <Card class="p-shadow-4">
      <template #content>
        <h3>Order Statistics</h3>
        <div class="mb-4" style="width: 100%; height: 400px">
          <Chart type="line" :data="chartData" :options="chartOptions" />
        </div>
        <DataTable
          :value="orderStats"
          :rows="5"
          :paginator="true"
          class="p-datatable-sm"
        >
          <Column field="date" header="Date" style="width: 33%">
            <template #body="slotProps">
              {{ formatDate(slotProps.data.date, true) }}
            </template>
          </Column>
          <Column
            field="order_count"
            header="Order Count"
            style="width: 33%"
          ></Column>
          <Column
            field="total_amount"
            header="Total Amount"
            style="width: 34%"
          ></Column>
        </DataTable>
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
import Card from "primevue/card";
import Chart from "primevue/chart";

export default {
  components: {
    DataTable,
    Column,
    Dialog,
    Button,
    InputText,
    FloatLabel,
    Card,
    Chart,
  },
  data() {
    return {
      products: [],
      showAddProductDialog: false,
      showEditProductDialog: false,
      showDeleteProductDialog: false, // Thêm biến để điều khiển dialog xác nhận xóa
      productToDelete: null, // Lưu trữ ID của sản phẩm cần xóa
      newProduct: {
        name: "",
        type: "",
        desciption: "", // Sửa lỗi chính tả từ "desciption" thành "description"
        price: "",
        image: "",
        link: "",
      },
      editProduct: {
        id: "",
        name: "",
        type: "",
        desciption: "", // Sửa lỗi chính tả từ "descrption" thành "description"
        price: "",
        image: "",
        link: "",
      },
      orders: [],
      orderStats: [],
      productError: "",
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Order Count",
            backgroundColor: "#f87979",
            borderColor: "#f87979",
            data: [],
            fill: false,
          },
          {
            label: "Total Amount",
            backgroundColor: "#42A5F5",
            borderColor: "#42A5F5",
            data: [],
            fill: false,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  created() {
    this.fetchProducts();
    this.fetchOrders();
    this.fetchOrderStats();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:5734/api/products", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.products = response.data;
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to fetch products",
          life: 3000,
        });
      }
    },
    openAddProductDialog() {
      this.newProduct = {
        name: "",
        type: "",
        desciption: "",
        price: "",
        image: "",
        link: "",
      };
      this.productError = "";
      this.showAddProductDialog = true;
    },
    async addProduct() {
      try {
        const response = await axios.post(
          "http://localhost:5734/api/products",
          this.newProduct,
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
            detail: "Product added successfully",
            life: 3000,
          });
          this.showAddProductDialog = false;
          this.fetchProducts();
        }
      } catch (error) {
        this.productError =
          error.response?.data?.error || "Failed to add product";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.productError,
          life: 5000,
        });
      }
    },
    openEditProductDialog(product) {
      this.editProduct = { ...product };
      this.productError = "";
      this.showEditProductDialog = true;
    },
    async updateProduct() {
      try {
        const response = await axios.put(
          `http://localhost:5734/api/products/${this.editProduct.id}`,
          this.editProduct,
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
            detail: "Product updated successfully",
            life: 3000,
          });
          this.showEditProductDialog = false;
          this.fetchProducts();
        }
      } catch (error) {
        this.productError =
          error.response?.data?.error || "Failed to update product";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.productError,
          life: 5000,
        });
      }
    },
    openDeleteProductDialog(productId) {
      this.productToDelete = productId;
      this.showDeleteProductDialog = true;
    },
    async confirmDeleteProduct() {
      try {
        const response = await axios.delete(
          `http://localhost:5734/api/products/${this.productToDelete}`,
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
            detail: "Product deleted successfully",
            life: 3000,
          });
          this.showDeleteProductDialog = false;
          this.productToDelete = null;
          this.fetchProducts();
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: error.response?.data?.error || "Failed to delete product",
          life: 3000,
        });
        this.showDeleteProductDialog = false;
        this.productToDelete = null;
      }
    },
    async fetchOrders() {
      try {
        const response = await axios.get("http://localhost:5734/api/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.orders = response.data;
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to fetch orders",
          life: 3000,
        });
      }
    },
    async fetchOrderStats() {
      try {
        const response = await axios.get(
          "http://localhost:5734/api/orders/stats",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.orderStats = response.data;
        // Cập nhật dữ liệu cho biểu đồ
        this.chartData.labels = this.orderStats.map((stat) =>
          this.formatDate(stat.date, true)
        );
        this.chartData.datasets[0].data = this.orderStats.map(
          (stat) => stat.order_count
        );
        this.chartData.datasets[1].data = this.orderStats.map(
          (stat) => stat.total_amount
        );
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to fetch order stats",
          life: 3000,
        });
      }
    },
    formatDate(dateStr, dateOnly = false) {
      const date = new Date(dateStr);
      // Điều chỉnh múi giờ sang +07 (Việt Nam)
      const vnDate = new Date(date.getTime() + 7 * 60 * 60 * 1000);
      if (dateOnly) {
        return vnDate.toISOString().split("T")[0]; // Chỉ lấy ngày (YYYY-MM-DD)
      }
      return vnDate.toLocaleString("vi-VN", {
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    },
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
};
</script>

<style scoped>
.manager-container {
  padding: 20px;
  background-color: #180318;
  min-height: calc(100vh - 60px);
}

.custom-dialog .p-dialog-content {
  padding: 0 !important;
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

.text-danger {
  color: #dc3545;
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
