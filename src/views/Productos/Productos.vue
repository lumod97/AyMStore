<template>
  <div class="container-fluid pt-5">
    <h1 class="d-flex mb-5">Productos</h1>
    <div class="d-flex justify-content-end mb-4">
      <b-button
        variant="primary"
        @click="openModalNewProduct = true"
        class="me-2"
      >
        <b-icon icon="plus-lg" />
        Nuevo Producto
      </b-button>
    </div>

    <b-table
      ref="productsTable"
      show-empty
      empty-text="No hay productos para mostrar..."
      :busy-sync="false"
      :items="itemsProvider"
      :fields="fields"
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1" />
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(price)="data">
        {{'S/ '+Number.parseFloat(data.item.price).toFixed(2)}}
      </template>
      <template #cell(width)="data">
        {{Number.parseFloat(data.item.width).toFixed(2)+" cm"}}
      </template>
      <template #cell(height)="data">
        {{Number.parseFloat(data.item.height).toFixed(2)+" cm"}}
      </template>
      <template #cell(actions)="data">
        <b-icon
          icon="pencil-square"
          variant="warning"
          v-b-tooltip.hover.top="'Editar'"
          class="cursor-pointer me-2"
          @click="editProduct(data.item.id)"
        />

        <b-icon
          icon="trash"
          variant="danger"
          v-b-tooltip.hover.top="'Eliminar'"
          class="cursor-pointer"
          @click="deleteProduct(data.item.id)"
        />

        <b-form-checkbox @change="deleteProductsById" v-model="idsProductsSelected"/>
      </template>
    </b-table>
    <modal-new-product v-if="openModalNewProduct" @hidden="reloadTable" :isUpdate="updateProduct" :idProductUpdate="idProductUpdate"/>
  </div>
</template>

<script>
import ModalNewProduct from "@/views/Productos/modals/ModalNewProduct.vue";
import ProductService from "@/views/Productos/services/product.service";
import Swal from "sweetalert2";

export default {
  components: {
    ModalNewProduct,
  },
  data() {
    return {
      openModalNewProduct: false,
      updateProduct: false,
      idProductUpdate: null,
      idsProductsSelected:[],
      fields: [
        {
          key: "code",
          sortable: false,
        },
        {
          key: "name",
          sortable: false,
        },
        {
          key: "price",
          sortable: false,
        },
        {
          key: "description",
          sortable: false,
        },
        {
          key: "width",
          sortable: false,
        },
        {
          key: "height",
          sortable: false,
        },
        {
          key: "actions",
          sortable: false,
        },
      ],
      products: [
        {
          code: "01",
          name: "Producto 1",
          description: "Descripcion de producto 1",
          width: "10.2",
          height: "40.3",
          status: "active",
        },
      ],
    };
  },
  methods: {
    reloadTable() {
      this.idProductUpdate + null
      this.updateProduct = false
      this.openModalNewProduct = false;
      this.$refs.productsTable.refresh();
    },
    async itemsProvider(ctx) {
      console.log(ctx);
      const data = await ProductService.getProducts([]);
      return data.data.data;
    },
    async editProduct(id){
      this.idProductUpdate = id
      this.updateProduct = true
      this.openModalNewProduct = true
    },
    async deleteProduct(id) {
      try {
        const result = await Swal.fire({
          title: "Estas seguro?",
          text: "Esta accion no se revertira!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Rechazar",
          confirmButtonText: "Confirmar",
        }).then((result) => {
          if (result.isConfirmed) {
            return true;
          }
        });

        if (result) {
          const data = await ProductService.deleteProducts({ id: id });
          if (data.status == 200) {
            this.reloadTable();
            Swal.fire(
              "Exito",
              "El registro se ha eliminado correctamente",
              "info"
            );
          }
        }
      } catch (error) {
        throw error;
      }
    },
    async deleteProductsById(id){
      this.idProductUpdate.
      console.log(this.idsProductsSelected)
    }
  },
};
</script>
